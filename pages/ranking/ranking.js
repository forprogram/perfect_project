var app = getApp()
Page({
  data: {
    tagDayClass: 'tag-green',
    tagTotalClass: '',
    userInfo: {},
    rinkingData: {},
    todayRinking: {},
  },

  onLoad: function () {
    var that = this;
    that.setData({
      userInfo: app.globalData.userInfo,
      todayRinking: app.globalData.todayRinking,
      rinkingData: app.globalData.todayRinking,
    })
  },

  onPullDownRefresh: function() {

  },

  selectTag: function(e) {
    console.log('!!____---rinkingData', app.globalData.totalRinking)
    var that = this;
    if (e.target.dataset.index == 0) {
      that.setData({
        tagDayClass: 'tag-green',
        tagTotalClass: '',
        rinkingData: app.globalData.todayRinking,
      })
      
    } else if (e.target.dataset.index == 1) {
      that.setData({
        tagDayClass: '',
        tagTotalClass: 'tag-green',
        rinkingData: app.globalData.totalRinking,
      })
      console.log('rinkingData', rinkingData)
    }
  },

})
