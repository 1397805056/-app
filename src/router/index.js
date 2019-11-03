 import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/pages/MSite/MSite.vue'
import Order from '@/pages/Order/Order.vue'
import Profile from '@/pages/Profile/Profile.vue'
import Search from '@/pages/Search/Search.vue'
import Login from '@/pages/Login/Login.vue'
/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/msite',
      component: Msite,
			meta:{
				showFooter: true
			}
    },
	{
    path: '/',
		redirect:'/msite'
    },
	 {
	  path: '/search',
	  component: Search,
		meta:{
			showFooter: true
		}
	},
	{
	  path: '/order',
	  component: Order,
		meta:{
			showFooter: true
		}
	},
	{
	  path: '/profile',
	  component: Profile,
		meta:{
			showFooter: true
		}
	},
		{
	  path: '/login',
	  component: Login
	},
  ]
})
