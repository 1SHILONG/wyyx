import request from './network.js'

export const getDetailData = (id) => {
  return request({
    url: '/api/detail',
    data: {
      id
    }
  })
}