import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location, onComplete = () => {}, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function(
  location,
  onComplete,
  onAbort = () => {}
) {
  return originalReplace.call(this, location, onComplete, onAbort)
}
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
