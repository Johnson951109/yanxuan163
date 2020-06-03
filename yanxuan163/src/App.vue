<template>
  <div id="app">
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style lang="stylus" scoped>
  #app
    width 100%
    height 100%
</style>
