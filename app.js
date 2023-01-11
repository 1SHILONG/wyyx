App({
  onLaunch() {
    wx.getStorage({
      key: 'cart',
      success: (res) => {
        this.globalData.cartList = res.data || []
      }
    })
  // 取得自定义顶部导航栏需要的数据
  // 将数据存储在app.js 方便各个页面使用自定义导航栏时复用导航组件
    wx.getSystemInfo({
      success: res => {
        // 取得系统的数据
          let menuButtonObject = wx.getMenuButtonBoundingClientRect();
          // 取得菜单按钮距页面左侧的数据  设置成自定义导航的可用宽度
          let navWidth = menuButtonObject.left;
          // 同步自定义自定义导航顶部状态栏的高度
          let statusBarHeight = res.statusBarHeight;
          // 同步自定义自定义导航栏的高度
          let navHeight = statusBarHeight  + menuButtonObject.height + (menuButtonObject.top -  statusBarHeight) * 2; // 填补状态栏和菜单按钮中间的缝隙
          // 导航栏中功能栏的高度
          let funcBarHeight = menuButtonObject.height;
          // 同步自定义自定义导航栏距页面顶部的top偏移量
          let navTop = menuButtonObject.top;
          Object.assign(this.globalData, {
            navWidth,
            navHeight,
            navTop,
            funcBarHeight
          })
      }
    })
  },
  addToCart(obj) {
    const oldInfo = this.globalData.cartList 
      .find(item => item.id === obj.id );
      // console.log(oldInfo);
    if (oldInfo) {
      oldInfo.count++;
    } else {
      obj.count = 1
      obj.checked = true // 默认勾选
      this.globalData.cartList.push(obj)
    }
    wx.setStorage({
      key: 'cart',
      data: this.globalData.cartList
    })
  },
  globalData: {
      navWidth:0,
      navHeight:0,
      navTop:0,
      funcBarHeight: 0,
      cartList: []
  }
})
