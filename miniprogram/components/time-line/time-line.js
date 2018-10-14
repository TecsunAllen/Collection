Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    timeData: []
  },
  ready: function () {
    wx.cloud.callFunction({
      name: 'getAllData',
      data: {}
    }).then(res => {
      this.setData({
        timeData: res.result.data
      });
    });
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { }
  }
})