// 引入组件,并注册成路由组件
import Home from '@/pages/Home'
import Category from '@/pages/Category'
import Topic from '@/pages/Topic'
import Cart from '@/pages/Cart'
import Ucenter from '@/pages/Ucenter'
import Search from '@/pages/Search'
// 暴露路由
export default [
  // 首页
  {
    path: '/',
    component: Home
  },
  // 分类
  {
    path: '/item/cateList',
    component: Category
  },
  // 值得买
  {
    path: '/topic/index',
    component: Topic
  },
  // 搜索
  {
    path: '/search',
    component: Search
  },
  // 购物车
  {
    path: '/cart',
    component: Cart
  },
  // 个人
  {
    path: '/u/login',
    component: Ucenter
  }
]
