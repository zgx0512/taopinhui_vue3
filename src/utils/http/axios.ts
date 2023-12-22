/*
 * @Author: zgx 2324461523@qq.com
 * @Date: 2023-07-16 05:52:36
 * @LastEditors: zgx 2324461523@qq.com
 * @LastEditTime: 2023-12-22 14:47:23
 * @FilePath: \taopinhui_vue3\src\utils\http\axios.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios, { AxiosInstance, AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios'
import { errorHandler, errorMsgHandler } from './errorHandler'

import qs from 'qs'

declare module 'axios' {
  export interface AxiosRequestConfig {
    isReturnNativeData?: boolean
    errorMode?: string
    repeatRequest?: boolean
  }
}

let pendingMap = new Map()

function getRequestKey(config: AxiosRequestConfig) {
  return (
    (config.method || '') +
    config.url +
    '?' +
    qs.stringify(config?.data) +
    qs.stringify(config?.params)
  )
}

function setPendingMap(config: AxiosRequestConfig) {
  const controller = new AbortController()
  config.signal = controller.signal
  const key = getRequestKey(config)
  if (pendingMap.has(key)) {
    pendingMap.get(key).abort()
    pendingMap.delete(key)
  } else {
    pendingMap.set(key, controller)
  }
}

const service: AxiosInstance = axios.create({
  timeout: 1000 * 5,
  baseURL: import.meta.env.VITE_BASE_URL
})

service.interceptors.request.use(
  (config) => {
    if (!config.repeatRequest) {
      setPendingMap(config)
    }
    return config
  },
  (error: AxiosError) => {
    console.log(error)
    return Promise.reject()
  }
)

service.interceptors.response.use((response: AxiosResponse) => {
  const config = response.config
  const key = getRequestKey(config)
  pendingMap.delete(key)

  if (response.status === 200) {
    if (config?.isReturnNativeData) {
      return response.data
    } else {
      const { result, code, message } = response.data

      if (code === 200) {
        return result
      } else {
        errorHandler(message || errorMsgHandler(code), config.errorMode)
      }
    }
  } else {
    const errMsg = errorMsgHandler(response.status)
    // errorHandler(errMsg, config.errorMode)
    Promise.reject()
  }
})

// 错误处理
service.interceptors.response.use(undefined, (e) => {
  errorHandler(e?.response?.status || '')
})

export default service
