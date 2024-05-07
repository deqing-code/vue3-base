import dqRequest from '@/utils/request'

export function getDetailInfos(houseId) {
  return dqRequest.get({
    url: '/detail/infos',
    params: {
      houseId
    }
  })
}
