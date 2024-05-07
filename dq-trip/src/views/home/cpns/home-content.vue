<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houselist" :key="item.data.houseId"> </template>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped></style>
