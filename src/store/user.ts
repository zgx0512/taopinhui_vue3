import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { login, reqUserInfo, reqLogout } from '~/api/user'
import { UserInfo } from '~/types/index'
import { RouteRecordRaw } from 'vue-router'
import { setToken, clearToken } from '~/utils/token'
import { routeModuleList } from '~/router'
import router from '~/router'
import systemApi from '~/api/system'

export const useUserStore = defineStore(
  'user',
  () => {
    let permiss = ref(['btn_more', 'btn-edit', 'btn-delelte'])
    let role = ref('')
    let routes = ref()
    const userInfo = ref({
      avatar: '',
      username: ''
    })

    // 用户登录
    async function userLogin(param: UserInfo) {
      const res: any = await login({
        username: param.username,
        password: param.password
      })
      if (res.code === 200) {
        console.log(res)
        // 请求成功
        // 将token存储起来
        setToken(res.data)
        return true
      }
      return false
    }

    // 获取用户信息
    const getUserInfo = async () => {
      const result = await reqUserInfo()
      console.log(result)
      if (result.code === 200) {
        // 请求成功
        userInfo.value.avatar = result.data.avatar
        userInfo.value.username = result.data.username
      }
    }

    // 获取动态路由
    function setAsyncRoutes(data: RouteRecordRaw[]) {
      routes.value = data
    }

    const menuRoutes = computed(() => routes.value.filter((item: RouteRecordRaw) => !item.hidden))

    // 退出登录
    async function userLogout() {
      // 发送请求
      const result = await reqLogout()
      if (result.code === 200) {
        // 退出成功
        // 清空数据
        userInfo.value = {
          avatar: '',
          username: ''
        }
        role.value = ''
        permiss.value = []
        routes.value = []
        // 清空token
        clearToken()
      }
    }

    return {
      permiss,
      role,
      routes,
      menuRoutes,
      userInfo,
      userLogin,
      userLogout,
      setAsyncRoutes,
      getUserInfo
    }
  },
  {
    persist: true
  }
)
