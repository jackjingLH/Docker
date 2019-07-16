<template>
  <div class="m-main" @touchstart="">
    <div v-for="(item, index) in apply" class="apply"
         :style="{transform: 'translate(' + ((index + TopIndex) % 3 == 2 ? move : 0)  + 'px, ' + 5 * (apply.length - 1 - (index + TopIndex) % 3) + 'px) scaleX(' + (1 - (apply.length - 1 - (index + TopIndex) % 3) * 0.05) + ')', zIndex: (index + TopIndex) % 3 + 1}"
         @touchstart="progressTouchStart"
         @touchmove="progressTouchMove"
         @touchend="progressTouchEnd"
         :class="{ blur: (Math.abs(move) > 100) && (index + TopIndex) % 3 == 2}"
         v-show="!Decline || (index == 2 - TopIndex)"
    >
      <div v-for="(item, index) in item.images"
           class="pic"
           v-show="(Decline && !RotateX) || index == ImgIndex"
           :style="{transform: 'translate(' + (90 * (index - ImgIndex)) + '%, ' + (Decline ? -20 : 0) + 'px)'}"
           @touchstart="imgTouchStart"
           @touchend="imgTouchEnd"
      >
        <img :src=item alt="" class="img" :style="{transform: 'rotateY('+ rotateY +'deg) rotateX('+ RotateX +'deg)'}">
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {apply} from 'assets/api'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data() {
      return {
        apply: [],
        img: [],
        TopIndex: 0,
        move: 0,
        rotateY: 0
      }
    },
    created() {
      this._Fapply()
      this.touch = {}
      this.touch1 = {}
      this.move = 0
    },
    methods: {
      _Fapply() {
        this.apply = apply()
        this.SetItem({
          obj: this.apply[2 - this.TopIndex]
        })
        console.log(this.apply)
      },
      progressTouchStart(e) {
        if (this.Decline) {
          return
        }
        const touch = e.touches[0]
        this.touch.startX = touch.pageX
        this.touch.startY = touch.pageY
        console.log(this.touch)
      },
      progressTouchMove(e) {
        if (this.Decline) {
          return
        }
        let firstTouch = e.touches[0]
        this.touch.x2 = firstTouch.pageX
        this.move = (this.touch.x2 - this.touch.startX) | 0
        console.log(this.move)
      },
      progressTouchEnd(e) {
        if (this.Decline) {
          return
        }
        const touch = e.changedTouches[0]
        const deltaX = touch.pageX - this.touch.startX
        this.move = 0
        if (deltaX < -50) {
          this.TopIndex = this.TopIndex + 1
          if (this.TopIndex > 2) {
            this.TopIndex = 0
          }
          this.SetItem({
            obj: this.apply[2 - this.TopIndex]
          })
          console.log('left')
        } else if (deltaX > 50) {
          this.TopIndex = this.TopIndex + 1
          if (this.TopIndex > 2) {
            this.TopIndex = 0
          }
          this.SetItem({
            obj: this.apply[2 - this.TopIndex]
          })
          console.log('right')
        } else {
          this.SetDecline({
            bool: true
          })
          this.SetItem({
            obj: this.apply[2 - this.TopIndex]
          })
        }
      },
      imgTouchStart(e) {
        if (!this.Decline) {
          return
        }
        const touch = e.touches[0]
        this.touch1.startX = touch.pageX
      },
      imgTouchEnd(e) {
        if (!this.Decline || this.RotateX !== 0) {
          return
        }
        const touch = e.changedTouches[0]
        const deltaX = touch.pageX - this.touch.startX
        if (deltaX < -25) {
          this.SetImgIndex({
            num: this.ImgIndex + 1
          })
          this.rotateY = 20
          if (this.ImgIndex > 2) {
            this.SetImgIndex({
              num: 2
            })
          }
        } else if (deltaX > 25) {
          this.SetImgIndex({
            num: this.ImgIndex - 1
          })
          this.rotateY = -20
          if (this.ImgIndex < 0) {
            this.SetImgIndex({
              num: 0
            })
          }
        }
        setTimeout(() => {
          this.rotateY = 0
        }, 500)
        console.log(this.ImgIndex)
      },
      ...mapActions([
        'SetDecline',
        'SetImgIndex',
        'SetItem'
      ])
    },
    computed: {
      Decline: function () {
        return this.DecLine
      },
      ImgIndex: function () {
        return this.DecLine
      },
      ...mapGetters([
        'DecLine',
        'ImgIndex',
        'RotateX'
      ])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylue" type="text/stylus">
  .m-main
    text-align center
    position: absolute
    top: 40px
    bottom: 0
    right: 0
    left: 0
    overflow: hidden
    .apply
      position relative
      top 50px
      transition all .2s
      .pic
        position absolute
        z-index 10
        transition all .5s linear
        perspective:500
        -webkit-perspective:500
        .img
          width 84%
          border-radius 6px
          transition all 0.6s
          height 196px
    .blur
      filter: blur(1px)
</style>
