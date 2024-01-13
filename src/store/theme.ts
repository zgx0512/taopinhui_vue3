/*
 * @Author: zgx 2324461523@qq.com
 * @Date: 2023-07-16 05:52:36
 * @LastEditors: zgx 2324461523@qq.com
 * @LastEditTime: 2024-01-13 18:07:50
 * @FilePath: \taopinhui_vue3\src\store\theme.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  let css = ref({
    property: ''
  })
  // UI主题
  let scheme = ref('')
  // 布局方案
  let layoutScheme = ref('default')

  // 设置配色主题
  function setScheme(str: string) {
    scheme.value = str
  }

  // 设置CSS Vars
  function setCSS(property: string, value: string) {
    css.value.property = value
  }

  // 设置用户定义的CSS变量
  function setCustomized(vars: any) {
    Object.keys(vars).forEach((item) => {
      setCSS(vars[item].key, vars[item].value)
    })
  }

  // 设置布局方案
  function setLayoutScheme(layout: string) {
    layoutScheme.value = layout
  }

  return { scheme, css, layoutScheme, setCSS, setScheme, setCustomized, setLayoutScheme }
})
