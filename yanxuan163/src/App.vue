<template>
  <div>
    <TabBar/>
    <router-view></router-view>
  </div>
</template>

<script>
// 引入Header组件
import Header from './components/Header'
// 引入Footer组件
import Footer from './components/Footer'
// 引入TabBar组件
import TabBar from './components/TabBar'
export default {
  name: 'App',
  // 注册组件
  components: {
    Header,
    Footer,
    TabBar
  }
}
</script>

<style>
</style>
