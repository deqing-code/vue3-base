<template>
  <div class="home"></div>
  <button class="back-button" @click="goback">&lt; 返回</button>
  <iframe
    ref="iframe"
    class="web"
    src="https://www.htfutures.com/main/gw/service/jyrl/cddt/index.shtml"
    frameborder="0"
    @load="initIframeEvents"
  ></iframe>
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
  htsdk.navigateTo('/pages/detail/index?url=http://localhost:5173/#/detail', { isShowNew: 1 })
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

.back-button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>
