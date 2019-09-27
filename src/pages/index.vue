<template>
  <view>
    index page
  </view>
</template>

<script>
import wepy from 'wepy'

export default class Index extends wepy.page {
  config = {
    navigationBarTitleText: 'index page'
  }
  components = {}

  data = {
    
  }

  computed = {
  }

  methods = {
  }

  onLoad() {
    console.log('index page load')
  }
}
</script>
