<template>
  <view>
    test page
  </view>
</template>

<script>
import wepy from 'wepy'

export default class Test extends wepy.page {
  config = {
    navigationBarTitleText: 'test page'
  }
  components = {}

  data = {
    
  }

  computed = {
  }

  methods = {
  }

  onLoad() {
    console.log('test page load')
  }
}
</script>
