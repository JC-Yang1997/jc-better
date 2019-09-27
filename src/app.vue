<script>
import wepy from 'wepy'

export default class extends wepy.app {
  config = {
    pages: [
      'pages/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'js-better',
      navigationBarTextStyle: 'black'
    }
  }

  globalData = {}

  constructor () {
    super()
  }

  onLaunch() {}
}
</script>
