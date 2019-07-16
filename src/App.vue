<template>
  <div id="app">
    <m-header></m-header>
    <router-view/>
    <div class="img">
      <img src="../statics/img/bg.png" alt="">
    </div>

  </div>
</template>

<script>
  import MHeader from 'components/m-header/m-header'

  export default {
    components: {
      MHeader
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylue" type="text/stylus">
  .img
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    overflow hidden
    img
      height 100%
</style>
