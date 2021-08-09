import {Component} from 'react'

import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
// import { postSamples } from '../../api/siege'
import getBarHeight from '../../utils/getBarHeight'
import image from '../../assets/images/back.png'
import blackImage from '../../assets/images/back_black.png'

import './index.scss'

export default class Lottery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navigationBarStyle: {
        height: 88 + 'rpx'
      }
    }
  }
  componentWillMount() {}

  componentDidMount() {
    this.setState({
      navigationBarStyle: getBarHeight()
    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const {navigationBarStyle } = this.state
    const styles = { ...navigationBarStyle, color: '#000' }
    return (
      <View className='sample'>
        <View className='sample-navigation-title' style={styles}>
          <Image src={styles.color === '#fff' ? image : blackImage} onClick={Taro.navigateBack.bind(this)} />
          <Text onClick={Taro.navigateBack.bind(this)}>sample</Text>
        </View>
        <View>
          <Text>hello world</Text>
        </View>
      </View>
    )
  }
}
