import request from './network.js'

export const getCartData = () => {
  return request({
    url: '/api/cart',
  })
}