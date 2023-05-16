Page({
  data: {
    active: 'home',
    tabbars: {
      home: "/pages/home/home",
      search: "/pages/search/search",
      friends: "/pages/friends/friends",
      setting: "/pages/setting/setting"
    },
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
    console.log(event.detail)
    wx.switchTab({
      url: this.data.tabbars[event.detail]
    })
  },
});
