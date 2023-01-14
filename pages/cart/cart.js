import {
  getCartData
} from '../../service/cart.js'
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cartList: [],
    totalPrice: 0,
    totalCounter: 0,
    isSelectAll: true,
    cartGoods: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   this._getCartData()
    this.setData({
      cartList: app.globalData.cartList
    })
  },
  _getCartData() {
    getCartData() 
      .then(res => {
        this.setData({
          cartGoods: res.data
        });
        })
  },
  onSelectAll() {
    this.setData({
      isSelectAll: !this.data.isSelectAll
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  changeData() {
    let cartList = app.globalData.cartList;
    let totalCounter = 0;
    let totalPrice = cartList.reduce((pre, cur) => {
      totalCounter++;
      return  pre + cur.price * cur.count;
    }, 0)
    const selectAll = !cartList.find(item => !item.checked);

    this.setData({
      cartList,
      totalPrice,
      totalCounter,
      isSelectAll: selectAll
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.changeData();
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