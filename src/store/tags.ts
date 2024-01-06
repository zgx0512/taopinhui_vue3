/*
 * @Author: zgx 2324461523@qq.com
 * @Date: 2023-07-16 05:52:36
 * @LastEditors: zgx 2324461523@qq.com
 * @LastEditTime: 2024-01-06 17:48:42
 * @FilePath: \taopinhui_vue3\src\store\tags.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface ListItem {
  name: string
  path: string
  title: string
}

export const useTagsStore = defineStore(
  'tags',
  () => {
    let list = ref<ListItem[]>([])

    let show = computed(() => {
      return list.value.length > 0
    })
    let nameList = computed(() => {
      return list.value.map((item: ListItem) => item.name)
    })

    function delTagsItem(index: number) {
      list.value.splice(index, 1)
    }
    function setTagsItem(data: ListItem) {
      list.value.push(data)
    }
    function clearTags() {
      list.value = []
    }
    function closeTagsOther(data: ListItem[]) {
      list.value = data
    }

    return { list, show, nameList, delTagsItem, setTagsItem, clearTags, closeTagsOther }
  }
)
