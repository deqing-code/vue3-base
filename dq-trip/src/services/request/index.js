import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import { useMainStore } from '../store/main'

const mainStore = useMainStore()

class DQRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.requestAnimationFrame.use(config => {
        mainStore.isLoading = true
        return config
      },
      error => {
        return error
      })
      this.instance.interceptors.requestAnimationFrame.use(res => {
        mainStore.isLoading = false
        return res

      },
      error => {
        mainStore.isLoading = false
        return error
      })
  }
  request(config) {
    return new Promise((resolve, reject) => {
        this.instance.request(config).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })

    get(config) {
        return this.request({...config, method: 'get' })
    }

    post(config) {
        return this.request({...config, method: 'post' })
    }
    
  
}

export default new DQRequest(BASE_URL, TIMEOUT)
