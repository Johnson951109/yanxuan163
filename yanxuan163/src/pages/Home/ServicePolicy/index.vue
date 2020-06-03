<template>
  <div class="servicePolicy">
    <ul class="spWrap">
      <li class="item">
        <a>
          <i class="servicePolicy-index spIndex1"></i>
          <span class="text">网易自营品牌</span>
        </a>
      </li>
      <li class="item"> 
        <a>
          <i class="servicePolicy-index spIndex2"></i>
          <span class="text">30天无忧退货</span>
        </a>
      </li>
      <li class="item">
        <a>
          <i class="servicePolicy-index spIndex3"></i>
          <span class="text">48小时快速退款</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ServicePolicy'
}
</script>

<style lang="stylus">
  .servicePolicy
    background-color #ffffff
    display block
    color #333
    .spWrap
      width 100%
      height .96rem
      padding 0 .4rem
      display flex
      flex-flow row nowrap
      align-items center
      zoom 1
      .item
        flex 1
        float left
        a
          display inline-block
          vertical-align middle
          height .42667rem
          .servicePolicy-index
            display inline-block
            vertical-align middle
            background-repeat no-repeat
            background-size 100% 100%
            width .42667rem
            height .42667rem
          .spIndex1
            background-image url(http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png)
          .spIndex2
            background-image url(http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png)
          .spIndex3
            background-image url(http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png)
          .text
            font-size .32rem
            color #333
            margin-left .10667rem
            line-height .42667rem
            display inline-block
            vertical-align middle
      &::after
        display block
        clear both
        visibility hidden
        height 0
        overflow hidden
        content "."
</style>  