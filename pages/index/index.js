// index.js
Page({
  data: {
    active: 'home',
  },
  onChange(event) {
    console.log(event.detail)
    this.setData({ active: event.detail });
  },
});

