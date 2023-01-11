import request from './network.js'

export const getSlideData = () => {
  return request({
    url: '/api/slide',
  })
}

export const getProduct = (type, page) => {
  return request({
    url: '/api/goodsData',
    data: {
      type,
      page
    }
  })
}

