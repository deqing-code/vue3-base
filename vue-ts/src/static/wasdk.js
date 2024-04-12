import htsdk from '@/static/htsdk'
import Utils from '@/static/utils'

window.native = {
  adpter: {
    jsticket: {
      appId: 'yourAppId',
      timestamp: 'yourTimestamp',
      nonceStr: 'yourNonceStr',
      signature: 'yourSignature'
    }
  }
}

class WASDK {
  static hashInfo = {
    isInit: false,
    originHref: '',
    callbackExecuted: false,
    callbackArr: []
  }
  constructor() {
    if ('onhashchange' in window && window.addEventListener && !WASDK.hashInfo.isInit) {
      // if (window.addEventListener && !WASDK.hashInfo.isInit) {
      WASDK.hashInfo.isInit = true
      console.log('WASDK constructor')
      // 绑定hashchange事件
      window.addEventListener(
        'hashchange',
        () => {
          if (WASDK.hashInfo.callbackExecuted) {
            // if (WASDK.hashInfo.originHref != window.location.href) {
            //   window.history.go(-1)
            // }
            return
          }
          WASDK.hashInfo.originHref = window.location.href
          console.log('window.location.href ==', window.location.href)
          console.log('window.native ==', window.native)
          if (Utils.gethash(window.location.href, '__wachangehash') === '1') {
            const jsticket =
              (window.native && window.native.adapter && window.native.adapter.jsticket) || null
            const ua = navigator.userAgent
            console.log('ua===', ua)
            // 非安卓系统要重新设置config
            if (jsticket && (ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1)) {
              window.wx.config({
                debug: false,
                appId: jsticket.appId,
                timestamp: jsticket.timestamp,
                nonceStr: jsticket.nonceStr,
                signature: jsticket.signature,
                jsApiList: [
                  'onMenuShareTimeline',
                  'onMenuShareAppMessage',
                  'onMenuShareQQ',
                  'onMenuShareWeibo',
                  'onMenuShareQZone',
                  'scanQRCode',
                  'chooseImage',
                  'uploadImage',
                  'previewImage'
                ]
              })
            }
          }
          // 标记回调函数已执行
          WASDK.hashInfo.callbackExecuted = true

          // 触发缓存数值的回调
          WASDK.hashInfo.callbackArr.forEach((callback) => {
            callback()
          })

          // 设置定时器，2秒后重置标志变量
          setTimeout(() => {
            WASDK.hashInfo.callbackExecuted = false
          }, 1000)
          setTimeout(() => {
            window.history.go(-1)
          }, 0)
        },
        false
      )
    }
  }

  static destroyCallbackArr() {
    WASDK.hashInfo.callbackArr = []
  }

  onShow(callback) {
    if (typeof callback === 'function') {
      WASDK.hashInfo.callbackArr.push(function () {
        if (Utils.gethash(window.location.href, '__isonshow') === '1') {
          callback()
        }
      })
    } else {
      console.error('onShow参数必须是函数')
    }
  }

  onChooseImage(callback) {
    if (typeof callback === 'function') {
      WASDK.hashInfo.callbackArr.push(function () {
        if (Utils.gethash(window.location.href, '__onchooseimage') === '1') {
          callback()
        }
      })
    } else {
      console.error('onchooseimage参数必须是函数')
    }
  }

  serviceDone(obj, condition) {
    if (obj && obj.key) {
      const message = {
        // 消息名称
        key: obj.key,
        // 消息体
        content: obj.content || '',
        // 触发条件
        trigger: {
          // 类型 'immediately' 在下一次onshow中立即触发，'url' 找到指定的url触发，'path' 打开指定的小程序路径触发
          type: 'immediately',
          // 触发条件内容，immediately 是空，url 是 h5 链接路径，path 是小程序路径
          content: ''
        }
      }

      condition = condition || 0
      // 如果是路径
      if (
        typeof condition === 'string' &&
        (condition.indexOf('http') > -1 || condition.indexOf('https') > -1)
      ) {
        // 设置消息触发条件
        message.trigger = {
          type: condition.indexOf('http') > -1 ? 'url' : 'path',
          content: condition
        }
      }
      htsdk.postMessage({
        data: {
          messageData: message
        }
      })

      // 如果不是 url 或者 path 触发，则对 condition 是否需要返回进行判断
      if (message.trigger.type === 'immediately') {
        try {
          condition = parseInt(condition, 10)
        } catch (e) {
          // 保证返回正确性
          if (condition && typeof condition === 'number' && !isNaN(condition)) {
            this.handler.navigateBack({ delta: Math.abs(condition) })
          }
        }
      } else {
        console.log('参数错误，调用 serviceDone 方法，传入的对象中不包含 key 值')
      }
    }
  }
}

export default WASDK
