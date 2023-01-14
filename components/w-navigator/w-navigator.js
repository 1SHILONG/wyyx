// components/w-navigator/w-navigator.js
const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isHome: {
      type: Boolean,
      value: false
    } ,
    isHome_show: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    msgList:[{title:"全价速冻猫粮"},{title:"咖啡饼干"},{title:"雪绒高纯鹅绒被"},{title:"咖啡碳保暖内衣"}],
    navWidth: app.globalData.navWidth,
    navHeight: app.globalData.navHeight,
    navTop: app.globalData.navTop,
    funcBarHeight: app.globalData.funcBarHeight
  },

  /**
   * 组件的方法列表
   */
  methods: {
    stopTouchMove() {
      return false
    }
  },
  options: {
    styleIsolation: "apply-shared"
  }
})
