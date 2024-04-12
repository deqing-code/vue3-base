<script setup lang="ts">
import WASDK from '@/static/wasdk'
import { stringifyQuery, useRouter } from 'vue-router'
const router = useRouter()

const goback = () => {
  console.log('goback')
  router.back()
}

const chooseImage = () => {
  window.location.hash = '#/&__onchooseimage=1'
}

const sdk = new WASDK()

function onShowCallback() {
  console.log('onShow triggered!')
}

const onChooseImageCallback = () => {
  console.log('onChooseImageCallback')

  const obj = { name: 'image', value: 'image' }
  const json = JSON.stringify(obj)
  //   htsdk.
}

sdk.onShow(onShowCallback)
sdk.onChooseImage(onChooseImageCallback)
// window.location.hash = '#/&__isonshow=1'
// sdk.serviceDone({ key: 'yourKey', content: 'yourContent' }, 'https://example.com/somepath')
</script>

<template>
  <button @click="goback">返回</button>
  <button @click="chooseImage">选择图片</button>
</template>

<style scoped></style>
