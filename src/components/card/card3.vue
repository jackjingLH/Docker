<template>
  <transition name="card3">
    <div class="card3">
      <div class="title">YOU TICKET:</div>
      <div class="card">
        <div class="ticket" :style="{transform: 'translateY(' + translateY + 'px)'}">
          <div class="bg" :style="{background: 'url(' + img + ')'}">
          </div>
          <div class="t-text">
            <ul>
              <li>电影：{{Item.name}}</li>
              <li>座位：{{sel}}</li>
              <li>金额：$ {{amount}}</li>
            </ul>
            <h2>{{Item.ticketDate}} </br>{{Item.session}}</h2>
          </div>
          <div class="txm">
            <img src="../../../statics/img/timg.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        translateY: -550
      }
    },
    computed: {
      Decline: function () {
        return this.DecLine
      },
      Item: function () {
        return this.Item
      },
      sel: function () {
        return this.Item.sel.toString()
      },
      img: function () {
        return this.Item.images[0].toString()
      },
      amount: function() {
        return (this.Item.sel.length * 19.9).toFixed(2)
      },
      ...mapGetters([
        'DecLine',
        'Item'
      ])
    },
    created() {
      if (!this.Decline) {
        this.$router.push('/')
      }
    },
    mounted: function() {
      this.$nextTick(function () {
        this.cartView()
      })
    },
    methods: {
      cartView() {
        setTimeout(() => {
          this.translateY = 0
        }, 500)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylue" type="text/stylus">
  .card3-enter-active
    transition: all 0.6s ease
  .card3-leave-active
    transition: all 0s ease
  .card3-enter, .card3-leave-to
    transform: scale(0.8)
    opacity: 0

  .card
    position relative
    width 100%
    height 500px
    overflow hidden
    margin-top 35px
    .ticket
      background #fff
      width 80%
      height 280px
      position absolute
      left 10%
      transition all .6s ease
      border-radius 10px
      box-shadow 0px 2px 10px #d5d5d5
      padding 20px
      box-sizing border-box
      .bg
        height 100%
        width 100%
        background-size cover
        opacity 0.2
      .t-text
        position absolute
        top 20px
        width 100%
        ul
          text-align left
          width 100%
          li
            font-size 14px
            line-height 30px
            color #8a8a8a
        h2
          text-align left
          margin-top 50px
          padding-left 40px
          color #8989af
          font-weight 500
      .txm
        position absolute
        width 100%
        left 0
        top 285px
        background #fff
        border-radius 10px
        box-sizing border-box
        padding 10px
        box-shadow 0px 2px 10px #d5d5d5
        img
          width 100%
  .title
    color #b3b3b3
    padding 10px
    font-weight bold
  </style>
