<template>
  <van-swipe class="my-swiper" :autoplay="3000" indicator-color="white">
    <van-swipe-item class="my-swiper-inner" v-for="(image, index) in images" :key="index">
      <img v-lazy="image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: 'Swiper',
  data() {
    return {
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

<style lang="stylus" scoped>
.my-swiper
  height 3.94667rem
  img
    width 100%
    height 100%
</style>