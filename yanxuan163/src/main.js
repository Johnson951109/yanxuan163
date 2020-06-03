import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './resetvant.stylus'
import { Col, Row, Search, Tab, Tabs, Tabbar, TabbarItem, Icon, Swipe, SwipeItem, Lazyload, Sticky } from 'vant'
Vue.use(Col)
Vue.use(Row)
Vue.use(Search)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Sticky)
import './libs/rem'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
