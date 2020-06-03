<template>
  <div class="PopularModule">
    <div class="moduleTitle">
      <div class="left">人气推荐</div>
      <a class="right" href="">更多></a>
    </div>
    <div class="moduleTop">
      <div class="moduleTop-left"></div>
      <div class="moduleTop-right">
        <div class="name">15分钟快速救脸，射频多功能美容仪</div>
        <div class="desc">掌心里的“美容院”</div>
        <div class="price">￥899</div>
      </div>
    </div>
    <div class="moduleBottom">
      <ul>
        <li>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularModule'
}
</script>

<style lang="stylus">
.PopularModule 
  background-color #ffffff
  margin-bottom .26667rem
  padding-bottom .4rem
  .moduleTitle
    width 100%
    height 1.33333rem
    line-height 1.33333rem
    padding 0 .4rem
    background #fff
    overflow hidden
    .left
      float left
      font-size .42667rem
      font-family PingFangSC-Regular
    .right 
      display block
      font-size .37333rem
      float right
      color #333
      line-height 1.33333rem
  .moduleTop
    color #333
    width 9.2rem
    height 3.73333rem
    display flex
    flex-flow row nowrap
    align-items center
    background #FEF0DF
    border-radius .05333rem
    margin 0 .4rem .26667rem
    .moduleTop-left
      background url(https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&type=webp&imageView&thumbnail=280x280)
      background-size 100% 100%
      width 3.73333rem
      height 3.73333rem
      background-size 100% 100%
      margin-right .4rem
    .moduleTop-right
      .name
        font-family PingFangSC-Regular
        font-size .37333rem
        width 4.66667rem
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      .desc
        font-size .32rem
        color #7F7F7F
        width 4.66667rem
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      .price
        font-size .37333rem
        color #DD1A21

</style>