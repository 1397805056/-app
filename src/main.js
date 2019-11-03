// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from './router'
/**
 * 重写路由的push方法
 */
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
	render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
