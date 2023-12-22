import { DirectiveBinding } from 'vue'

import { useUserStore } from '~/store/user'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const val = binding.value
    const useUser = useUserStore()
    const permiss = useUser.permiss
    const parentEl = el.parentElement

    let flag = true
    // 可以传入字符串和数组
    if (typeof val === 'string') {
      flag = permiss.includes(val)
    } else {
      flag = val.some((item: string) => permiss.includes(item))
    }

    if (!flag) parentEl?.removeChild(el)
  }
}
