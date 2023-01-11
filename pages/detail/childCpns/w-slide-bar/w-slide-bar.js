// pages/detail/childCpns/w-slide-bar/w-slide-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    images:{
      type: Array,
      value: []
    },
    imagesLength: {
      type: Number,
      value: 0
    }
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperMove(e) {
      // console.log(e);
      this.setData({
        currentIndex: e.detail.current + 1
      })
    }
  }
})
