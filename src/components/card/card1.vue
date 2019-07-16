<template>
  <transition name="card1">
      <div class="card1">
        <div class="name">
          {{this.Item.name}}
        </div>
        <div class="date">
          {{ri}}<span class="ri">日 <span class="yue">{{nian}}年{{yue}}月</span></span>
        </div>
        <div class="btns">
          <p>选择场次</p>
          <button class="btn" @click="btnF('07.30 - 1号厅')">07.30(1号厅)</button>
          <button class="btn" @click="btnF('10.30 - 1号厅')">10.30(1号厅)</button>
          <button class="btn" @click="btnF('13.30 - 3号厅')">13.30(3号厅)</button>
          <button class="btn" @click="btnF('16.30 - IMAX')">16.30(IMAX)</button>
          <button class="btn" @click="btnF('19.30 - 1号厅')">19.30(1号厅)</button>
        </div>
      </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data() {
      return {
      }
    },
    created() {
      this._getDecline()
    },
    computed: {
      ri() {
        let data = new Date()
        return data.getDate()
      },
      yue() {
        let data = new Date()
        return data.getMonth() + 1
      },
      nian() {
        let data = new Date()
        return data.getFullYear()
      },
      Decline: function () {
        return this.DecLine
      },
      Item: function () {
        return this.Item
      },
      ...mapGetters([
        'DecLine',
        'Item'
      ])
    },
    methods: {
      _getDecline() {
        if (!this.Decline) {
          this.$router.push('/')
        }
      },
      btnF(a) {
        let item = this.Item
        item.session = a
        item.ticketDate = new Date().toLocaleDateString()
        this.$router.push({
          path: `/card2`
        })
        this.SetRotateX({
          deg: -45
        })
        this.SetItem({
          obj: item
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
  .card1-enter-active, .card1-leave-active
    transition: all 0.8s ease

  .card1-enter
    opacity: 0.2
  .card1-leave-to
    transform: scale(0.8)
    opacity: 0
  .card1
    background #fff
    width 84%
    border-radius 10px
    box-shadow 0px 2px 10px #d5d5d5
    padding 20px
    box-sizing border-box
    position absolute
    left 8%
    margin-top 200px
    height 350px
    .name
      text-align left
    .date
      text-align left
      font-size 50px
      color #adaecf
      margin-top 10px
      font-weight 100
      position relative
      .ri
        font-size 14px
      .yue
        font-size: 20px
        position: absolute
        right: 0px
        bottom: 10px
        color #777
        font-weight: 500
    .btns
      .btn
        float: left
        left 0
        border: none;
        background: #adaecf;
        color: #fff;
        padding: 5px 20px;
        border-radius: 5px;
        transition all 1s
        margin 5px
        text-decoration none
        font-size 14px
</style>
