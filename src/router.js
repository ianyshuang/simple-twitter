import Vue from 'vue'
import Router from 'vue-router'
import Logout from './views/Logout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/tweets',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/users/:id/tweets',
      name: 'Profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/users/:id/edit',
      name: 'ProfileEdit',
      component: () => import('./views/ProfileEdit.vue')
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ]
})
