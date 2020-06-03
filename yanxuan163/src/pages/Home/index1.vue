<template>
  <div>
    <!-- header -->
    <van-row class="line">
      <van-col class="logo"></van-col>
      <van-col class="search">
        <i class="icon"></i>
        <span class="placeholder">搜索商品，共29022款好物</span>
      </van-col>
      <van-col class="loginBtn">登录</van-col>
    </van-row>
    <!-- tab -->
    <van-tabs>
      <van-tab class="tab" v-for="(tab, index) in tabsList" :title="tab" :key="index">
      </van-tab>
    </van-tabs>
    <!-- swipe -->
    <van-swipe class="my-swiper" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="my-swiper-inner" v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- homePolicy -->
    <van-row class="service-info">
      <van-col span="8">
        <i class="icon icon1"></i>
        <span class="text">网易自营品牌</span>
      </van-col>
      <van-col span="8">
        <i class="icon icon2"></i>
        <span class="text">30天无忧退货</span>
      </van-col>
      <van-col span="8">
        <i class="icon icon3"></i>
        <span class="text">48小时快速退款</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      tabsList: ["推荐","居家生活","服饰鞋包","美食酒水","个护清洁","母婴亲子","运动旅行","数码家电","严选全球"],
      images: [
        'https://yanxuan.nosdn.127.net/b6ccdb8d18db1e601a5e0814b12c7099.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'http://yanxuan-miaobi.nos-jd.163yun.com/1152176_1_4_wap_727631487696e9635e5d3e33371b20f9.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/03b1449a34931dce521dc1a8ba01ff04.png?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/7406334eaca021f7316b86ee21c3f320.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/c8f6ea8569234c98d5f33c757b3b7960.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/c25f9461ac49048b7064d45d86e8e73a.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/26010ed9257f3539512529cbc60245fd.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/d3fed1565d636233a577c20b82b191eb.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
      ]
    }
  }
}
</script>

<style lang="stylus">
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
.my-swiper
  height 3.94667rem
  img
    width 100%
    height 100%
.service-info
  text-align center
  .icon
    display inline-block
    vertical-align middle
    text-align center
    background-repeat no-repeat
    background-size 100% 100%
    width .42667rem
    height .42667rem
  .icon1
    background-image url(http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png)
  .icon2
    background-image url(http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png)
  .icon3
    background-image url(http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png)
  .text
    font-size .32rem
    color #333
    margin-left .10667rem
    line-height .42667rem
    display inline-block
    vertical-align middle
</style>