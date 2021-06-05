import router from './index'
import store from '../store'
import cookies from 'vue-cookies'

router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next()
    return
  }
  const token = store.getters.getToken
  if (token === '') {
    const cookieToken = cookies.get('x-token')
    if (cookieToken === null || cookieToken === '') {
      next({ path: '/login' })
    } else {
      store.dispatch('Token/updateToken', cookies.get('x-token')).then(() => {
        next()
      }).catch(() => {
        // todo 执行token设置失败逻辑
      })
    }
  } else {
    next()
  }
})
