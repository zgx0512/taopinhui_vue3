/*
 * @Author: zgx 2324461523@qq.com
 * @Date: 2023-07-16 05:52:36
 * @LastEditors: zgx 2324461523@qq.com
 * @LastEditTime: 2024-01-12 17:22:52
 * @FilePath: \taopinhui_vue3\src\store\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { login, reqUserInfo, reqLogout } from '~/api/user'
import { UserInfo } from '~/types/index'
import { setToken, clearToken, getToken } from '~/utils/token'

export const useUserStore = defineStore('userStore', () => {
  let permiss = ref(['btn_more', 'btn-edit', 'btn-delelte'])
  // 用户信息
  const userInfo = ref({
    avatar: '',
    username: ''
  })
  // token
  const token = ref<string>(getToken() as string)

  // 用户登录
  async function userLogin(param: UserInfo) {
    const res: any = await login({
      username: param.username,
      password: param.password
    })
    if (res.code === 200) {
      // 请求成功
      // 将token存储起来
      token.value = res.data
      setToken(res.data)
      return true
    }
    return false
  }

  // 获取用户信息
  const getUserInfo = async () => {
    const result = await reqUserInfo()
    if (result.code === 200) {
      // 请求成功
      userInfo.value.avatar = result.data.avatar
      userInfo.value.username = result.data.name
      return 'ok'
    }
    return Promise.reject(new Error(''))
  }

  // 退出登录
  async function userLogout() {
    // 发送请求
    const result = await reqLogout()
    if (result.code === 200) {
      // 清空数据
      userInfo.value.avatar = '',
      userInfo.value.username = ''
      permiss.value = []
      // 清空token
      clearToken()
      token.value = ''
      return 'ok'
    }
    return Promise.reject(new Error())
  }
  return {
    permiss,
    userInfo,
    token,
    userLogin,
    userLogout,
    getUserInfo
  }
})
