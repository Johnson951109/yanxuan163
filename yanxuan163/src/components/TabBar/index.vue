<template>
    <van-tabbar v-model="active" active-color="#cc0000" inactive-color="#000">
      <van-tabbar-item icon="wap-home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" replace to="/item/cateList">分类</van-tabbar-item>
      <van-tabbar-item icon="shop-o" replace to="/topic/index">值得买</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" replace to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" replace to="/u/login">个人</van-tabbar-item>
    </van-tabbar>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)
export default {
  name: 'TabBar',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>
</style>
