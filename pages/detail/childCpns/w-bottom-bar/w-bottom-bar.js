// pages/detail/childCpns/w-bottom-bar/w-bottom-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onAddCart() {
      // 触发父组件的addcart事件的 wx.showToast()  反馈成功加入购物车
      this.triggerEvent('addcart')
    }
  }
})
