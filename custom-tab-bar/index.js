Page({
  data: {
    active: 0,
    tabbars: [
      {
        text: '首页',
        pathPage: '/pages/home/home',
        icon: 'home-o'
      },
      {
        text: '商品',
        pathPage: '/pages/goods/goods',
        icon: 'shop-o'
      },
      {
        text: '我的',
        pathPage: '/pages/mine/mine',
        icon: 'contact'
      }
    ],
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
    wx.switchTab({
      url: this.data.tabbars[event.detail].pathPage
    })
  },
});
