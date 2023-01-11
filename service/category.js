import request from './network.js'

export const getContents = () => {
  return request({
    url: '/api/category',
  })
}
