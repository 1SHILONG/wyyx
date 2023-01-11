Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sideList: {
      type: Array,
      value: []
    }
  },  
  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0 // 私有属性
  },
  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(e) {
      this.setData({
        currentIndex: e.currentTarget.dataset.index
      })
      const data = {index: this.data.currentIndex}
      // 向父组件传递数据
      this.triggerEvent("onclick", data, {})
    }
  }
})
