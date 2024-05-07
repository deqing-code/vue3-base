import { defineStore } from 'pinia'
import { getCityAll } from '@/services'

const useCityStore = defineStore('city', {
  state: () => ({
    allCity: {},
    currentCity: {
      cityName: ''
    }
  }),
  actions: {
    async fetchAllCities() {
      const res = await getCityAll()
      this.allCity = res.data
    }
  }
})

export default useCityStore
