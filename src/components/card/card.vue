<template>
  <transition name="card">
    <div class="card" :class="{Vcard: Decline}" :style="{transform: 'translateY(' + (Decline ? -10 : 0) + 'px)'}">
      <div class="left">
        <h3>{{name.name}} <br>
          {{name.releaseTime}}
        </h3>
      </div>
      <div class="right">
        <i class="iconfont icon-icon-test"></i> {{name.star}}
      </div>
      <div class="clear"></div>
      <button class="btn" type="button" v-show="Decline" @click.prevent.stop="togo">在线选座</button>
      <div class="clear"></div>
      <div class="introduction">
        <p style="font-weight: bold">Introduction:</p>
        <p class="text">{{name.Introduction}}</p>
      </div>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
      }
    },
    computed: {
      Decline: function () {
        return this.DecLine
      },
      name: function () {
        return this.Item
      },
      ...mapGetters([
        'DecLine',
        'Item'
      ])
    },
    methods: {
      togo() {
        console.log(1)
        this.$router.push({
          path: `/card1`
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylue" type="text/stylus">
  .card-enter-active, .card-leave-active
    transition: all 0.8s ease

  .card-enter, .card-leave-to
    transform: scale(0.8)
    opacity: 0

  .card
    background #fff
    width 84%
    height 350px
    border-radius 10px
    margin-top 180px
    box-shadow 0px 2px 10px #d5d5d5
    padding 20px
    box-sizing border-box
    position absolute
    left 8%
    transition: all 0.8s ease
    .left
      float: left
      color #ADAECF
      h3
        text-align left
        font-weight 500
    .right
      float: right
      margin-top: 45px
    .clear
      clear both
    .btn
      float: left
      left 0
      border: none;
      background: #adaecf;
      color: #fff;
      padding: 5px 50px;
      border-radius: 5px;
      transition all 1s
    .introduction
      margin-top 30px
      text-align left
      font-size 11px
      .text
        text-align justify
        line-height 1.5
        color #737171
   .Vcard
     height 450px
</style>
