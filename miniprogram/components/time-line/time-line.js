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
    timeData: [
      {
        time: "公元前1000-567",
        label: '大唐'
      },
      {
        time: "公元前2000-567",
        label: '大宋'
      }
    ]
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { }
  }
})