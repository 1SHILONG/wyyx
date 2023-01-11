// pages/home/childCpns/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {

    itemClick(e) {
      // console.log(e, 'target(只被绑定事件组件触发) 与 currentTarget(当前的一个整个组件)')
      this.setData({
        currentIndex: e.currentTarget.dataset.index
      })
      const data = {index: this.data.currentIndex}
      this.triggerEvent("tapclick", data, {})
    }
  }
})
