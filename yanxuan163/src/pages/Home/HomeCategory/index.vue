<template>
  <div class=homeCategory>
    <ul class="homeCategoryWrap">
      <li class="homeCategoryInner">
        <a href>
          <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt />
          <span>新品首发</span>
        </a>
      </li>
      <li class="homeCategoryInner">
        <a href>
          <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt />
          <span>居家生活</span>
        </a>
      </li>
      <li class="homeCategoryInner">
        <a href>
          <img src="https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png" alt />
          <span>服饰鞋包</span>
        </a>
      </li>
      <li class="homeCategoryInner">
        <a href>
          <img src="http://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png" alt />
          <span>美食酒水</span>
        </a>
      </li>
      <li class="homeCategoryInner">
        <a href>
          <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" alt />
          <span>个护清理</span>
        </a>
      </li>
      <li class="homeCategoryInner">
        <a href>
          <img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" alt />
          <span>母婴亲子</span>
        </a>
      </li>
      <li class="homeCategoryInner">
        <a href>
          <img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" alt />
          <span>运动旅行</span>
        </a>
      </li>
      <li class="homeCategoryInner">
        <a href>
          <img src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" alt />
          <span>数码家电</span>
        </a>
      </li>
      <li class="homeCategoryInner">
        <a href>
          <img src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" alt />
          <span>全球特色</span>
        </a>
      </li>
      <li class="homeCategoryInner">
        <a href>
          <img src="http://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif" alt />
          <span>好货抄底</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeCategory'
}
</script>

<style lang="stylus">
  .homeCategory
    width 100%
    height 340px
    .homeCategoryWrap
      width 100%
      .homeCategoryInner
        width 20%
        height 2.08rem
        float left
        display flex
        padding .13333rem .26667rem 0
        img 
          width 1.46667rem
          height 1.46667rem
          display block
        span 
          display block
          margin-top .13333rem
          text-align center
          font-size .32rem
          line-height .48rem
          white-space nowrap
          font-family PingFangSC-Regular
</style>