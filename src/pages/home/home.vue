<template>
  <view>
    home page
  </view>
</template>

<script>
import wepy from 'wepy'
import { getStore } from 'wepy-redux'

const store = getStore()

export default class Home extends wepy.page {
  config = {
    navigationBarTitleText: 'home page'
  }
  components = {}

  data = {
    
  }

  computed = {
  }

  methods = {
  }
  onShow(){
    console.log('store', store)
    console.log('state', store.getState())
  }
  onLoad() {
    console.log('home page load')
  }
}
</script>
