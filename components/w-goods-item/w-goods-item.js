// components/w-goods-item/w-goods-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsitem: {
      type: Object,
      value: {}
    }
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
    itemClick(e) {
      // 这里是模拟利用id的唯一性来操作
      const id = this.data.goodsitem.id; 
      // 有实际后端接口时，需要使用传递参数的这种写法
      wx.navigateTo({
        url: `/pages/detail/detail?id=${id}`,
      })
    }
  }
})
