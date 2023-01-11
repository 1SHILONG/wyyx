Component({

  properties: {
    slideList: {
      type: Array,
      value: []
    }
  },

  data: {
    slideLeft: 0,
    slideWidth: 46,
    totalLength: "",
    slideRatio: "",
  },

  methods: {
    getleft(e) {
      const _totalLength = this.data.slideList.length * 155; // 750rpx屏宽的 图片滑动列表的表宽
      const _ratio = 92 / _totalLength; // 滑块的包含框与图片列表总长的比例
      const _showLength = 778 / _totalLength * 92; // 滑动块的长度
      this.setData({
        slideWidth: _showLength,
        totalLength: _totalLength,
        slideRatio: _ratio,
        slideLeft: e.detail.scrollLeft * this.data.slideRatio
      })
    },
  }
})
