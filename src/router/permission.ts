import router from '~/router'
import { useUserStore } from '~/store/user'
import pinia from '~/store'

// 实例化路由对象
const userStore = useUserStore(pinia)
// 解构出user仓库中函数跟对象
const { userInfo, getUserInfo, userLogout } = userStore

router.beforeEach(async (to, from, next) => {
  document.title = `${to.meta.title} | 淘品汇后台管理系统`
  if (userStore.token) {
    // 有token，已登录状态
    if (to.path === '/login') {
      next('/')
    } else {
      if (userInfo.avatar === '' && userInfo.username === '') {
        // 头像跟名称为空，重新发送获取用户信息的请求
        try {
          await getUserInfo()
          next()
        } catch (error) {
          // token失效了，直接退出登录
          userLogout()
        }
      } else {
        next()
      }
    }
  } else {
    // 未登录状态
    if (to.path !== '/login') {
      // 不是去往登录页，直接跳转到登录页
      next('/login')
    } else {
      // 放行
      next()
    }
  }
})
