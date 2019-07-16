<template>
  <div class="m-header">
    <i class="iconfont icon-back" @click="back"></i>
    <h1 class="text">CapMovie</h1>
    <i class="iconfont icon-category"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions} from 'vuex'

  export default {
    methods: {
      back() {
        this.SetDecline({
          bool: false
        })
        this.SetRotateX({
          deg: 0
        })
        this.$router.push('/')
      },
      ...mapActions([
        'SetDecline',
        'SetRotateX'
      ])
    }
  }
</script>

<style type="text/stylus" scoped lang="stylus" rel="stylesheet/stylus">
  .m-header
    position: relative
    height: 44px
    text-align: center
    color: $color-text
    font-size: 0
    z-index 50
    .icon-category
      position absolute
      right  0
      padding: 9px
      font-size: 22px
      color: #000
    .icon-back
      position absolute
      left  0
      display: inline-block
      padding: 9px
      font-size: 22px
      color: #000
    .text
      display: inline-block
      vertical-align: top
      font-size: 16px
      font-weight 400
      color: $color-text
</style>
