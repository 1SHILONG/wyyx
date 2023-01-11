// 模块化   将请求封装 
// 需要请求的时候 直接调用
import { baseURL, timeout } from './config.js'
function request(options) {
  // 请求比较耗时 先展示数据加载的效果给用户 提高用户体验感
  wx.showLoading({
    title: '数据加载中',
  })
  return new Promise((resolve) => {
    wx.request({
      url: baseURL + options.url,
      timeout,
      data: options.data || {},
      success: function(res) {
        resolve(res.data)
      },
      complete: function() {
        wx.hideLoading()
      }
    })
  })
}
// 向外导出 函数 request
// 注意export default在一个文件中只能存在一个  外部导入时 使用import 不需要{}
export default request