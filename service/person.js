import request from './network.js'

export const getGoodsData = () => {
  return request({
    url: '/api/person',
  })
}