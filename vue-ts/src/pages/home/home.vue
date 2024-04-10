<template>
  <div class="home"></div>
  <a href="https://www.w3school.com.cn" target="_blank">测试a标签跳转_blank新的webview</a>
  <button class="navDetail" @click="navToDetail">测试与taro的交互 跳转新的webview</button>
  <button class="postMessage" @click="postMessage">测试与taro的交互 h5传值到taro</button>
  <!-- <button class="postMessage" @click="handleMsgEvent">测试与uni-app的交互 h5 拍照交互</button> -->
</template>

<script setup lang="ts">
import { computed, watch, onMounted, onUnmounted } from 'vue'
import htsdk from '@/static/htsdk'

// onMounted(() => {})

// // 在组件卸载时移除事件监听
// onUnmounted(() => {})

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
  height: 100%;
}
</style>
