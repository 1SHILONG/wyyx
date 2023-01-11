// pages/home/childCpns/search-bar/search-bar.js
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
    msgList:[{title:"全价速冻猫粮"},{title:"咖啡饼干"},{title:"雪绒高纯鹅绒被"},{title:"咖啡碳保暖内衣"}],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    stopTouchMove() {
      return false
    }
  }
})
