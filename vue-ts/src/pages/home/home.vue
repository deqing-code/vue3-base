<template>
  <div class="home"></div>
  <a href="https://www.w3school.com.cn" target="_blank">测试a标签跳转_blank新的webview</a>
  <button class="navLocalDetail" @click="navLocalDetail">跳转到本地详情页</button>
  <button class="navDetail" @click="navToDetail">测试与taro的交互 跳转新的webview</button>
  <button class="postMessage" @click="postMessage">测试与taro的交互 h5传值到taro</button>
  <!-- <button class="goback" @click="goback">返回上一页</button> -->
  <!-- <button class="postMessage" @click="handleMsgEvent">测试与uni-app的交互 h5 拍照交互</button> -->
  <!-- <iframe class="web" src="https://www.htfutures.com/main/gw/index.shtml" frameborder="0"></iframe> -->
</template>

<script setup lang="ts">
import { computed, watch, onMounted, onUnmounted, ref } from 'vue'
import { stringifyQuery, useRouter } from 'vue-router'
import htsdk from '@/static/htsdk'

const router = useRouter()
// onMounted(() => {})

// // 在组件卸载时移除事件监听
// onUnmounted(() => {})
const iframe = ref(null)

const initIframeEvents = () => {
  const iframeDocument = iframe.value.contentDocument || iframe.value.contentWindow.document
  iframeDocument.addEventListener('click', handleIframeClick)
}
const goback = () => {
  router.back()
}
const handleIframeClick = (event) => {
  // 处理点击事件
  console.log('Iframe clicked', event)
  navDetail()
}

const navLocalDetail = () => {
  console.log('jump to vue detail')
  router.push('/detail')
}

const navToDetail = () => {
  console.log('jump to vue detail')
  htsdk.navigateTo('/pages/detail/index?url=http://localhost:5173/#/detail&__wachangehash=1', {
    isShowNew: 1
  })
  // htsdk.navigateTo('/pages/detail/index?url=http://localhost:5173/#/detail', { isShowNew: 1 })
  //   htsdk.navigateTo('/pages/detail/index?url=http://localhost:5173/#/search', { isShowNew: true })
}

const postMessage = () => {}
</script>

<style scoped>
.home {
  padding-bottom: 60px;
}

.web {
  width: 100%;
  height: 100vh;
}
</style>
