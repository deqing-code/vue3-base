import { defineStore } from 'pinia'

const useCityStore = defineStore('city', {
  state: () => ({
    city: '北京'
  }),
  actions: {}
})

export default useCityStore
