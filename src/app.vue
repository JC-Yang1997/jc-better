<script>
import wepy from 'wepy'
import { setStore } from 'wepy-redux'
import configStore from './store'
const store = configStore() 
setStore(store)

export default class extends wepy.app {
  config = {
    pages: [
      'pages/home/home',
      'pages/test/test'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'js-better',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list:[
        {
          pagePath: 'pages/home/home',
          text: '首页'
          // iconPath: '',
          // selectedIconPath:''
        },
        {
          pagePath: 'pages/test/test',
          text: '测试'
          // iconPath: '',
          // selectedIconPath:''
        }
      ]

    }
  }

  globalData = {}

  constructor () {
    super()
  }

  onLaunch() {}
}
</script>
