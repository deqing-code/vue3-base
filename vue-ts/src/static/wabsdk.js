import htsdk from '@/static/htsdk'

// const util = {
//   gethash: function (url, key) {
//     const hashIndex = url.indexOf('#')
//     if (hashIndex !== -1) {
//       const hashString = url.substr(hashIndex + 1)
//       const hashParams = hashString.split('&')
//       for (let i = 0; i < hashParams.length; i++) {
//         const keyValue = hashParams[i].split('=')
//         if (keyValue[0] === key) {
//           return keyValue[1]
//         }
//       }
//     }
//     return null
//   }
// }

// const window = {
//   native: {
//     adpter: {
//       jsticket: {
//         appId: 'yourAppId',
//         timestamp: 'yourTimestamp',
//         nonceStr: 'yourNonceStr',
//         signature: 'yourSignature'
//       }
//     }
//   }
// }
// class WASDK {
//   static hashInfo = {
//     isInit: false,
//     callbackArr: []
//   }

//   constructor() {
//     if ('onhashchange' in window && window.addEventListener && !WASDK.hashInfo.isInit) {
//       WASDK.hashInfo.isInit = true
//       // 绑定hashchange事件
//       window.addEventListener(
//         'hashchange',
//         () => {
//           if (util.getHash(window.location.href, '__wachangehash') === '1') {
//             const jsticket =
//               (window.native && window.native.adapter && window.native.adapter.jsticket) || null
//             const ua = navigator.userAgent

//             // 非安卓系统要重新设置config
//             if (jsticket && (ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1)) {
//               window.wx.config({
//                 debug: false,
//                 appId: jsticket.appId,
//                 timestamp: jsticket.timestamp,
//                 nonceStr: jsticket.nonceStr,
//                 signature: jsticket.signature,
//                 jsApiList: [
//                   'onMenuShareTimeline',
//                   'onMenuShareAppMessage',
//                   'onMenuShareQQ',
//                   'onMenuShareWeibo',
//                   'onMenuShareQZone',
//                   'scanQRCode',
//                   'chooseImage',
//                   'uploadImage',
//                   'previewImage'
//                 ]
//               })
//             }

//             // 触发缓存数值的回调
//             WASDK.hashInfo.callbackArr.forEach((callback) => {
//               callback()
//             })
//             setTimeout(() => {
//               window.history.go(-1)
//             }, 0)
//           }
//         },
//         false
//       )
//     }
//   }

//   onShow(callback) {
//     if (typeof callback === 'function') {
//       WASDK.hashInfo.callbackArr.push(function () {
//         if (util.getHash(window.location.href, '__isonshow') === '1') {
//           callback()
//         }
//       })
//     } else {
//       console.error('onShow参数必须是函数')
//     }
//   }

//   serviceDone(obj, condition) {
//     if (obj && obj.key) {
//       const message = {
//         // 消息名称
//         key: obj.key,
//         // 消息体
//         content: obj.content || '',
//         // 触发条件
//         trigger: {
//           // 类型 'immediately' 在下一次onshow中立即触发，'url' 找到指定的url触发，'path' 打开指定的小程序路径触发
//           type: 'immediately',
//           // 触发条件内容，immediately 是空，url 是 h5 链接路径，path 是小程序路径
//           content: ''
//         }
//       }

//       condition = condition || 0
//       // 如果是路径
//       if (
//         typeof condition === 'string' &&
//         (condition.indexOf('http') > -1 || condition.indexOf('https') > -1)
//       ) {
//         // 设置消息触发条件
//         message.trigger = {
//           type: condition.indexOf('http') > -1 ? 'url' : 'path',
//           content: condition
//         }
//       }
//       htsdk.postMessage({
//         data: {
//           messageData: message
//         }
//       })

//       // 如果不是 url 或者 path 触发，则对 condition 是否需要返回进行判断
//       if (message.trigger.type === 'immediately') {
//         try {
//           condition = parseInt(condition, 10)
//         } catch (e) {
//           // 保证返回正确性
//           if (condition && typeof condition === 'number' && !isNaN(condition)) {
//             this.handler.navigateBack({ delta: Math.abs(condition) })
//           }
//         }
//       } else {
//         console.log('参数错误，调用 serviceDone 方法，传入的对象中不包含 key 值')
//       }
//     }
//   }
// }

// export default new WASDK()
