<template>
  <div>
    <van-sticky>
      <div class="header">
        <div class="line">
          <a class="logo" href="/"></a>
          <div class="search">
            <i class="icon"></i>
            <span class="placeholder">搜索商品，共29022款好物</span>
          </div>
          <router-link to="/login" class="loginBtn">登录</router-link>
        </div>
        <div class="tabWrap">
          <div class="m-tabs">
            <header>
              <div class="inner" style="position:relative; height: 100%; width: 100%; overflow: hidden;">
                <div class="list">
                  <div class="tab active">
                    <span class="text">
                      推荐
                    </span>
                  </div>
                  <div class="tab">
                    <span class="text">
                      居家生活
                    </span>
                  </div>
                  <div class="tab">
                    <span class="text">
                      服饰鞋包
                    </span>
                  </div>
                  <div class="tab">
                    <span class="text">
                      美食酒水
                    </span>
                  </div>
                  <div class="tab">
                    <span class="text">
                      个护清洁
                    </span>
                  </div>
                  <div class="tab">
                    <span class="text">
                      母婴亲子
                    </span>
                  </div>
                  <div class="tab">
                    <span class="text">
                      运动旅行
                    </span>
                  </div>
                  <div class="tab">
                    <span class="text">
                      数码家电
                    </span>
                  </div>
                  <div class="tab">
                    <span class="text">
                      严选全球
                    </span>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div class="toggleWrap">
            <div class="linear"></div>
            <div class="toggle">
              <div class="icon"></div>
            </div>
          </div>
        </div>
      </div>
    </van-sticky>
    <Swiper />
    <ServicePolicy/>
    <HomeCategory/>
    <BigPromotionModule/>
    <FreshmanModule/>
    <CategoryHotSellModule/>
    <PopularModule/>
  </div>
</template>

<script>
import Swiper from '../../components/Swiper'
import ServicePolicy from './ServicePolicy'
import HomeCategory from './HomeCategory'
import BigPromotionModule from './BigPromotionModule'
import FreshmanModule from './FreshmanModule'
import CategoryHotSellModule from './CategoryHotSellModule'
import PopularModule from './PopularModule'
export default {
  name: 'Home',
  components: {
    Swiper,
    ServicePolicy,
    HomeCategory,
    BigPromotionModule,
    FreshmanModule,
    CategoryHotSellModule,
    PopularModule
  }
}
</script>

<style lang="stylus" scoped>
  .header
    background-color #ffffff
    border-bottom 1px solid #d9d9d9
    .line
      position relative
      z-index 2
      display flex
      flex-flow row nowrap
      align-items center
      background #ffffff
      padding .21333rem .4rem
      .logo
        background-image url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp)
        background-size cover
        width 1.84rem
        height .53333rem
        display inline-block
        margin-right .26667rem
        background-position center
      .search
        flex-grow 1
        display flex
        flex-flow row nowrap 
        align-items center
        justify-content center
        height .74667rem
        font-size .37333rem
        background-color #ededed
        border-radius .10667rem
        .icon
          background-image url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp);
          background-size 100% 100%
          display inline-block
          vertical-align middle
          background-repeat no-repeat
          width .37333rem
          height .37333rem
          margin-right .13333rem
        .placeholder
          color #666
      .loginBtn
        width .98667rem
        height .53333rem
        line-height .53333rem
        text-align center
        color #DD1A21
        border 2px solid #DD1A21
        border-radius .10667rem
        margin-left .21333rem
        font-size .32rem
    .tabWrap
      position relative
      z-index 2
      background #ffffff
      margin-top -.01333rem
      .m-tabs
        width 100%
        padding-right 1.33333rem
        header
          display flex
          flex-flow row nowrap
          background-color #fff
          position relative
          &::after 
            display none
            content ''
            position absolute
            background-color #d9d9d9
            left 0
            width 100%
            height 1px
            transform-origin 50% 100% 0
            bottom 0
          .inner
            position relative 
            height 100% 
            width 100% 
            overflow hidden
            display flex
            flex-flow row nowrap
            .list
              transition-timing-function cubic-bezier(0.1, 0.57, 0.1, 1)
              transition-duration 0ms
              transform translate(0px, 0px) translateZ(0px)
              display flex
              flex-flow row nowrap
              flex-shrink 0
              padding 0 .4rem
              background #ffffff
              .tab
                flex-shrink 0
                position relative
                display flex
                flex-flow row nowrap
                align-items center
                justify-content center
                z-index 1
                text-align center
                margin-left .26667rem
                &:first-of-type 
                  margin-left 0
                &.active
                  color #DD1A21
                  .text
                    position relative
                    color #DD1A21
                    &::after
                      content ' '
                      position absolute
                      left 0
                      bottom 0
                      width 100%
                      height .05333rem
                      background-color #DD1A21
                .text
                  display inline-block
                  padding 0 .21333rem
                  line-height .8rem
                  font-size .37333rem
                  color #333
                  text-align center
      .toggleWrap
        display flex
        flex-grow 0
        align-items center
        justify-content center
        position absolute
        top 0
        right 0
        .linear
          width .8rem
          height .8rem
          background-image linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
        .toggle
          width 1.33333rem
          height .8rem
          text-align center
          background #fff
          .icon
            background-image url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-9b31adfa37.png?imageView&type=webp)
            background-size 100% 100%
            margin-top .2rem
            display inline-block
            vertical-align middle
            background-repeat no-repeat
            width .4rem
            height .4rem
            transition transform .5s
</style>