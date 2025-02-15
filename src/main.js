import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: 'http://localhost:3000',
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    }
  })
)

router.beforeEach(async (to, from, next) => {
  if (to.path === '/login' || to.path === '/signup') {
    next()
    return
  }
  try {
    await store.dispatch('account/getUser')
    next()
  } catch (error) {
    console.log('logout')
    console.log('error', error)
    next({ path: '/login' })
    throw error
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
