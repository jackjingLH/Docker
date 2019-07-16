<template>
  <transition name="card2">
    <div class="card2">
      <div class="line" v-for="(item, index) in x">
        <div class="wz" v-for="(item1, index1) in y" :id="item + item1" :class="{dis: no.indexOf(item + item1) != -1, select: sel.indexOf(item + item1) != -1, change: change}" @click="select(item + item1)">
        </div>
      </div>
      <button class="btn" @click="pay" :class="{dis: len == 0}">前往支付</button>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data() {
      return {
        x: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
        y: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        no: [],
        sel: [],
        change: false
      }
    },
    computed: {
      Decline: function () {
        return this.DecLine
      },
      item: function () {
        return this.Item
      },
      len: function () {
        return this.sel.length
      },
      ...mapGetters([
        'DecLine',
        'Item'
      ])
    },
    mounted: function() {
      setTimeout(() => {
        this.change = true
        this.no = ['D5', 'C4']
      }, 500)
    },
    created() {
      if (!this.Decline) {
        this.$router.push('/')
      }
    },
    methods: {
      select(id) {
        if (this.no.indexOf(id) !== -1) {
          return
        }
        var index = this.sel.indexOf(id)
        if (index === -1) {
          this.sel.push(id)
        } else {
          this.sel.splice(index, 1)
        }
        console.log(this.len)
      },
      pay() {
        if (!this.len) {
          return
        }
        let item = this.item
        item.sel = this.sel
        console.log(item)
        this.SetRotateX({
          deg: -89
        })
        this.SetItem({
          obj: item
        })
        this.$router.push({
          path: `/card3`
        })
      },
      ...mapActions([
        'SetRotateX',
        'SetItem'
      ])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylue" type="text/stylus">
  .card2-enter-active, .card2-leave-active
    transition: all 1s ease

  .card2-enter, .card2-leave-to
    transform: scale(0.8)
    opacity: 0

  .card2
    width 84%
    border-radius 10px
    padding 20px
    box-sizing border-box
    position absolute
    left 8%
    margin-top 170px
    height 400px
    .line
      .wz
        width 25px
        height 25px
        background #fff
        border-radius 5px
        display inline-block
        box-shadow: 0px 0px 0px #fff
        margin: 0 2px
        transform scale(1.3)
        transition: all 0.8s ease
      .dis
        background #a6a6a6
      .change
        transform scale(1)
        box-shadow: 0px 0px 7px #ADAECF
      .select
        background #ADAECF
    .btn
      left 0
      border: none;
      background: #adaecf;
      color: #fff;
      padding: 10px 40px;
      border-radius: 5px;
      transition all 1s
      margin-top  25px
      text-decoration none
      width 100%
    .dis
      background #8e8585
</style>
