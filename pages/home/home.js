// 模块化
import {
  getSlideData,
  getProduct,
} from '../../service/home.js'
import {
 TP1, TP2, TP3, TP4, TP5, TP6, TP7, TP8, TP9,
} from '../../common/const.js'
const typeDic = {
  0: "TP1",
  1: "TP2",
  2: "TP3",
  3: "TP4",
  4: "TP5",
  5: "TP6",
  6: "TP7",
  7: "TP8",
  8: "TP9"
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
       isHome: true,
       isHome_show: false,
       slideList: [
        {
          link: "",
          url: "",
          title: ""
        }
      ],
      titles: ["猜你喜欢", "居家生活", "美食酒水", "个护清洁", "数码家电", "服饰鞋包", "运动旅行", "母婴亲子", "全球特色" ],
      goods: {
        [TP1]: {
          page: 1, 
          list: []
        },
        [TP2]: {
          page: 1, 
          list: []
        },
        [TP3]: {
          page: 1, 
          list: []
        },
        [TP4]: {
          page: 1, 
          list: []
        },
        [TP5]: {
          page: 1, 
          list: []
        },
        [TP6]: {
          page: 1, 
          list: []
        },
        [TP7]: {
          page: 1, 
          list: []
        },
        [TP8]: {
          page: 1, 
          list: []
        },
        [TP9]: {
          page: 1, 
          list: []
        }
      },
      page: 1,
      currentType: 'TP1',
      topNum: 0,
      up_show: false,
  },
  tapClick(e) {
    let { index } = e.detail // 解构语法
    this.setData({
      currentType: typeDic[index] //根据子组件传递的index数据改变父组件的currentType
    })
  },
  onLoad(options) {
    this._getData();
  },
  _getData() {
    this._getSlideData();
    const list = [TP1,TP2,TP3,TP4,TP5,TP6,TP7,TP8,TP9]
    this._initData(list)
  },
  _getSlideData() {
    getSlideData() // promise 拿到接口返回的数据
      .then(res => {
        const slideList = res.slideList;
        // console.log(slideList,  '----------') 
        this.setData({
          slideList
        });
        })
  },
  // 一次性请求完所有type的数据
  _initData(types) {
    types.forEach(type => {
     this._getProductData(type)
      })
  },
  _getProductData(type) {
    const page = this.data.goods[type].page;
    getProduct(type, page)
    .then(res => {
      const list = res.data[type].list;
      const goods = this.data.goods;
      goods[type].list.push(...list)
      goods[type].page += 1
      this.setData({
        goods
      })
    })
  },
  // 下拉加载数据
  loadMore() {
    this._getProductData(this.data.currentType);
  },
  // 顶部导航是否改变，回到顶部是否显示
  scrolltoupper: function(e) {
    if(e.detail.scrollTop > 48) {
      this.setData({
        isHome: false,
        isHome_show: true,
        up_show: true
      })
    }  else {
      this.setData({
        isHome: true,
        isHome_show: false,
        up_show: false
      })
    }
  },
// 回到顶部
  goTop: function() {
    this.setData({
        topNum: this.data.topNum = 0
    });
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