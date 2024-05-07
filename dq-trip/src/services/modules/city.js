import dqRequest from '@/utils/request'

export function getCityAll() {
  return dqRequest.get('/city/all')
}
