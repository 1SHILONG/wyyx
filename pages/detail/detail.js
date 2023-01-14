import { getDetailData } from '../../service/detail.js'
import { GoodsBaseInfo } from '../../models/detail.js'
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imagesLength: 0,
    id: 0,
    topImages: [],
    baseInfo: {},
    actInfo: {},
    shopInfo: [],
    showDialog: false
  },
  // 被组件调用 
  onAddCart() {
    const obj = {};
    obj.id = this.data.id;
    obj.imageURL = this.data.topImages[0];
    obj.title = this.data.baseInfo.title;
    obj.price = this.data.baseInfo.realPrice;
    app.addToCart(obj);
    wx.showToast({
      title: '加入购物车成功'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // 动画显示和隐藏
  showModals() {
    const _showDialog = !this.data.showDialog
    this.setData({
      showDialog: _showDialog
    })
  },
  onLoad(options) {
    const id = options.id;
    this.setData({
      id
    })
    this._getDetailData();
  },
  _getDetailData() {
    getDetailData(this.data.id)
      .then(res => {
        // 手动添加一个逻辑来判断 goods-item的id匹配detail一次性请求的所有数据中相关的那部分数据  用该数据来驱动页面更新
        // 模拟通过传参来向后端取得想要得到的数据
        const data1 = res.data; // 拿到所有数据
        const index =  data1.findIndex(item => item.id == this.data.id); // 找到对应id的那部分所需数据的下标
        const data = res.data[index]; // 拿到id对应的数据
        const topImages = data.topImages;
        const imagesLength = topImages.length;
        const baseInfo = new GoodsBaseInfo(data.itemInfo, data.contents);
        const actInfo = data.actInfo;
        const shopInfo = data.shopInfo;
        const argumentInfo = data.argumentInfo;
        this.setData({
          topImages,
          baseInfo,
          imagesLength,
          actInfo,
          shopInfo,
          argumentInfo
        })
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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