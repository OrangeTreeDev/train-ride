// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    initialTextAreaLines: 3,
    textAreaHeight: '120rpx'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 消息输入框行数变化
   */
  bindlinechange(e) {
    const { lineHeight, lineCount } = e.detail;
    const { initialTextAreaLines } = this.data;
    const maxLineCount = 7;
    let actualLineCount = lineCount;
    // 行数最大7行，最小3行
    if (lineCount > maxLineCount) {
      actualLineCount = maxLineCount;
    } else if (lineCount <= 3) {
      actualLineCount = initialTextAreaLines;
    }
    this.setData({
      textAreaHeight: `${40 * actualLineCount}rpx`
    });
  },
})