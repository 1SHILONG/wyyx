import {
  getContents
} from '../../service/category.js'
Page({
  /**
   * 页面初始数据
   */
  data: {
    search: '',
    activeCategory: 0,
    sideList: ["猜你喜欢", "居家生活", "美食酒水", "个护清洁", "数码家电", "服饰鞋包", "运动旅行", "母婴亲子", "全球特色"],
    goodsContents: [],
    currentIndex: 0
  },
  // 自定义父组件的绑定事件 接收子组件传递的数据
  onClick(e) {
    this.setData({
      currentIndex: e.detail.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this._getContents();  // onLoad尽量少放代码 需要写的逻辑单独封装成函数
  },
  _getContents() {
    // 向外请求数据
    getContents()
      .then(res => {
        this.setData({
          goodsContents: res.data.goodsContent
        })
      })
  },

  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})