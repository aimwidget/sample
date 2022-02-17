import Taro from '@tarojs/taro'

export default function getNavigationBarStyle() { // 是否固定使用上标签栏的高度,是返回否则返回固定高度值  是否导入系统的胶囊位置信息返回
  const menuInfo = Taro.getMenuButtonBoundingClientRect()// 胶囊信息
  const navigationBarPosition = {
    paddingTop: menuInfo.top - 4,
    height: menuInfo.height + menuInfo.top + 4
  }
  return formatStyle(navigationBarPosition)
}

function formatStyle(position) { // 将对象格式化为数组
  for (const key in position) {
    position[key] = position[key] + 'px'
  }
  return position
}
