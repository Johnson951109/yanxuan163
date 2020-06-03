import Home from '@/pages/Home'
import Category from '@/pages/Category'
import WorthBuying from '@/pages/WorthBuying'
import Cart from '@/pages/Cart'
import Personal from '@/pages/Personal'
export default [
  { 
    path: '/', 
    component: Home 
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/worthbuying',
    component: WorthBuying
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/personal',
    component: Personal
  },
  { path: '/',
    redirect: '/home' 
  }
]
