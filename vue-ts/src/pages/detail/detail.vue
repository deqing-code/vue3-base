<script setup lang="ts">
import WASDK from '@/static/wasdk'
import htsdk from '@/static/htsdk'
import { stringifyQuery, useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const val = ref(0)
const sdk = new WASDK()
const goback = () => {
  console.log('goback')
  router.back()
}

const add = () => {
  console.log('add')
  val.value += 1
}

const choosePay = () => {
  htsdk.navigateTo('/pages/pay/index?title=支付页面', {
    isShowNew: 1
  })
}

const shareAction = () => {
  console.log('h5 shareAction')
  const option = { title: '分享标题', path: '分享链接', imageUrl: '分享图片可为空' }
  htsdk.postMessage({
    data: {
      type: 'setShareOption',
      title: option.title,
      path: option.path,
      imageUrl: option.imageUrl
    }
  })
}

// window.location.href = 'http://localhost:5173/#/detail/#/&__wachangehash=1&_iswebviewpush=1713429309950&type=pay&code=0&data=%5Bobject%20Object%5D'
// window.location.hash = '#/detail/#/&__wachangehash=1'
// window.location.hash =
// '&__wachangehash=1&_iswebviewpush=1713428558648&type=pay&code=0&data=%5Bobject%20Object%5D'
// window.location.replace(window.location.href + '/&__onchooseimage=1')
// history.pushState({}, '', window.location.href + '/&__onchooseimage=1')
// sdk.serviceDone(
//   { key: 'yourKey', content: 'yourContent' },
//   window.location.href + '/&__wachangehash=1'
// )

function onShowCallback() {
  console.log('h5 onShow triggered!')
}

const onChooseImageCallback = () => {
  console.log('onChooseImageCallback')

  const obj = { name: 'image', value: 'image' }
  const json = JSON.stringify(obj)

  // sdk.serviceDone(
  //   {
  //     key: 'your_key', // 消息名称
  //     content: '选择图片' // 消息体，可选
  //   },
  //   ''
  // )
}

sdk.onShow(onShowCallback)
// sdk.onChooseImage(onChooseImageCallback)
// window.location.hash = '#/&__isonshow=1'
</script>

<template>
  <h1>{{ val }}</h1>
  <button @click="add">+1</button>
  <button @click="goback">返回</button>
  <button @click="choosePay">跳转到支付页面</button>
  <button @click="shareAction">分享页面</button>
</template>

<style scoped></style>
