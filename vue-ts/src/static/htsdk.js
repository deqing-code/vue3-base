import ht_uni from '@/static/uni.webview'

class HTSDK {
  //   constructor(options = null, success = null, fail = null) {
  //     this.options = options;
  //     this.success = success;
  //     this.fail = fail;
  //   }

  env() {
    wx.miniProgram.getEnv(function (res) {
      console.log(res.miniprogram)
    })
  }

  navigateTo(url, options) {
    // this.env()
    const { isShowNew } = options
    if (isShowNew === 1) {
      ht_uni.navigateTo({
        url: url
      })
    }

    // if (window?.__wxjs_environment == "miniprogram") {

    // }
  }

  postMessage(params) {
    // 向 taro 发送消息，调用方法并传递参数
    this.env()
    window?.wx.miniProgram.postMessage({
      data: params,
      success: function (res) {
        console.log('消息发送成功', res)
      },
      fail: function (err) {
        console.error('消息发送失败', err)
      }
    })

    // 发送选择图片的消息给小程序
    // window.postMessage({ type: "chooseImage" });

    // 发送拍照的消息给小程序
    // window.postMessage({ type: 'takePhoto' })

    //   // 发送录像的消息给小程序
    // window.postMessage({ type: 'recordVideo' })
  }
}

export default new HTSDK()
