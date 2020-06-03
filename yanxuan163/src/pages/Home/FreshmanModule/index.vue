<template>
  <div class="freshmanModule">
    <div class="moduleTitle">
      <span>-新人专享礼-</span>
    </div>
    <div class="content">
      <div class="left">
        <span class="name">新人专享礼包</span>
        <img src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
      </div>
      <div class="right">
        <div class="module1">
          <div class="text">福利社</div>
          <img src="https://yanxuan-item.nosdn.127.net/093cc020e9b5e1bd6736f7bc72bf9227.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
        <div class="module2">
          <div class="text">新人拼团</div>
          <img src="https://yanxuan-item.nosdn.127.net/3c2a24cb6a6d7134c66bcd651f2978d1.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FreshmanModule'
}
</script>

<style lang="stylus">
.freshmanModule
  width 100%
  margin-top .26667rem
  margin-bottom .26667rem
  padding-bottom .4rem
  .moduleTitle
    height 1.2rem
    width 100%
    line-height 1.2rem
    text-align center
    font-family PingFangSC-Regular
    font-size .42667rem
  .content
    padding-left .4rem
    .left 
      display block
      width 4.57333rem
      height 5.78667rem
      background #F9E9CF
      border-radius .05333rem
      margin-right .05333rem
      float left
      color #333
      .name
        font-family PingFangSC-Medium
        font-size .42667rem
        padding .4rem 0 .4rem .4rem
    .right 
      float left 
      .module1
        background #FBE2D3
        border-radius 4px
        width 4.57333rem
        height 2.86667rem
        margin-bottom .05333rem
        .text 
          font-family PingFangSC-Medium
          font-size .42667rem
        img 
          width 2.66667rem
          height 2.66667rem
          top .2rem
      .module2
        background #FBE2D3
        border-radius 4px
        width 4.57333rem
        height 2.86667rem
        margin-bottom .05333rem
        .text 
          font-family PingFangSC-Medium
          font-size .42667rem
        img 
          width 2.66667rem
          height 2.66667rem
          top .2rem
</style>