<template>
  <div class="CategoryHotSellModule">
    <div class="moduleTitle">
      <span>类目热销榜</span>
    </div>
    <div class="content">
      <div class="line1">
        <div class="left">
          <span class="name">热销榜</span>
          <img src="https://yanxuan-item.nosdn.127.net/91a264d84fed57f97c48dc107370e941.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
        <div class="right">
          <span class="name">好评榜</span>
          <img src="https://yanxuan-item.nosdn.127.net/f820d3a7417bbaf1bedf47fec4ed9d0b.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
      </div>
      <div class="line2">
        <ul>
          <li>
            <a href>
              <span>居家生活榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt />
            </a>
          </li>
          <li>
            <a href>
              <span>居家生活榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt />
            </a>
          </li>
          <li>
            <a href>
              <span>居家生活榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt />
            </a>
          </li>
          <li>
            <a href>
              <span>居家生活榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt />
            </a>
          </li>
          <li>
            <a href>
              <span>居家生活榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt />
            </a>
          </li>
          <li>
            <a href>
              <span>居家生活榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt />
            </a>
          </li>
          <li>
            <a href>
              <span>居家生活榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt />
            </a>
          </li>
          <li>
            <a href>
              <span>居家生活榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryHotSellModule'
}
</script>

<style lang="stylus">
.CategoryHotSellModule
  width 100%
  height 710px
  overflow hidden
  .moduleTitle
    width 100%
    height 1.33333rem
    line-height 1.33333rem
    padding 0 .4rem
    background #fff
    overflow hidden
    span 
      float left
      font-size .42667rem
      font-family PingFangSC-Regular
  .content 
    padding 0 .26667rem .26667rem .4rem
    overflow hidden
    .line1
      width 100%
      .left
        width 4.53333rem
        height 2.66667rem
        float left
        border-radius .05333rem
        margin 0 .13333rem .13333rem 0
        position relative
        .name 
          position relative
          padding-left .32rem
          color #333
          font-family PingFangSC-Medium
          font-size .37333rem
          z-index 5
        img 
          position absolute
          right 0
          top 0
          width 2.66667rem
          height 2.66667rem
      .right 
        width 4.53333rem
        height 2.66667rem
        float left
        border-radius .05333rem
        margin 0 .13333rem .13333rem 0
        position relative
        .name 
          position relative
          padding-left .32rem
          color #333
          font-family PingFangSC-Medium
          font-size .37333rem
          z-index 5
        img 
          position absolute
          right 0
          top 0
          width 2.66667rem
          height 2.66667rem
    .line2
      width 100%
      ul 
        width 100%
        li 
          display block
          width 2.2rem
          height 2.4rem
          background #F5F5F5
          border-radius .05333rem
          float left
          margin 0 .13333rem .13333rem 0
          span 
            margin .33333rem 0 0 .30667rem
            text-align center
            font-size .32rem
            color #333
            font-family PingFangSC-Medium
            display inline-block
          img 
            display inline-block
            width 1.6rem
            height 1.6rem
            margin .02667rem 0 0 .30667rem
</style>