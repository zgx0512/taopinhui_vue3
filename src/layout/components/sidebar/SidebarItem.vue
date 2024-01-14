<!--
 * @Author: zgx 2324461523@qq.com
 * @Date: 2023-07-16 05:52:36
 * @LastEditors: zgx 2324461523@qq.com
 * @LastEditTime: 2024-01-04 14:48:28
 * @FilePath: \taopinhui_vue3\src\layout\components\sidebar\SidebarItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-sub-menu
    :index="getPath(parentPath, item.path)"
    v-if="filteredItems && filteredItems.length > 0"
  >
    <template #title>
      <MoIcon
        :icon-name="item.meta.icon"
        v-if="item.meta.icon"
        class="ml-1 mr-1 text-lg"
      />

      <span>{{ $t(`route.${item.meta.title}`) }}</span>
    </template>
    <SidebarItem
      :item="item1"
      :parent-path="getPath(parentPath, item.path)"
      :level="level + 1"
      v-for="item1 in filteredItems"
    />
  </el-sub-menu>
  <el-menu-item :index="getPath(parentPath, item.path)" v-else>
    <MoIcon :icon-name="item.meta.icon" class="ml-1 mr-1 text-lg" />
    <template #title>{{ $t(`route.${item.meta.title}`) }}</template>
  </el-menu-item>
</template>

<script lang="ts" setup name="SidebarItem">
import { computed } from 'vue'
import { RouteRecordRaw } from 'vue-router'

const props = defineProps({
  item: { type: Object, default: () => {} },
  parentPath: { type: String, default: '' },
  level: { type: Number, default: 0 }
})

const filteredItems = computed(() => {
  if (props.item.children) return props.item.children.filter((val: RouteRecordRaw) => !val.hidden)
  else return null
})

function getPath(parentPath: string, path: string) {
  if (parentPath) return `${parentPath}/${path}`
  else return path
}
</script>
