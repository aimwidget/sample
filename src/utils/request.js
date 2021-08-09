import Taro from '@tarojs/taro'

const request = (
  options = { method: 'POST', url: '', data: {}, loading: false }
) => {
  return new Promise((resolve, reject) => {
    // 不传递默认开启loading
    if (options.loading) {
      Taro.showLoading({
        title: '加载中...',
        mask: true
      })
    }
    // const header = {}
    // if (options.method.toUpperCase() === 'POST') {
    //   header['content-Type'] = 'application/x-www-form-urlencoded'
    // }
    Taro.request({
      // header,
      url: options.url,
      data: options.data || {},
      method: options.method.toUpperCase(),
      success: function(res) {
        const _data = res.data
        if (+_data.error.code === 0) {
          resolve(_data)
        } else {
          Taro.showToast({
            title: _data.error.msg || '系统异常',
            icon: 'none'
          })
          resolve(_data)
        }
      },
      fail: function(err) {
        reject(err)
      },
      complete() {
        if (options.loading) {
          // 隐藏loading
          Taro.hideLoading()
        }
      }
    })
  })
}

export default request
