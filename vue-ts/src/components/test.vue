<template>
  <div>
    <h1>{{ val }}</h1>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  name: 'test',
  unmounted() {
    console.log('about unmounted')
  },
  data() {
    return {
      val: 0
    }
  },

  methods: {
    add() {
      this.val += 1
    }
  }
}
</script>

<style scoped></style>
