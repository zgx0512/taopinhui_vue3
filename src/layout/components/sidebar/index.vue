<!--
 * @Author: zgx 2324461523@qq.com
 * @Date: 2023-07-16 05:52:36
 * @LastEditors: zgx 2324461523@qq.com
 * @LastEditTime: 2024-01-06 18:21:36
 * @FilePath: \taopinhui_vue3\src\layout\components\sidebar\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-aside width="200px">
    <!-- 菜单加载时默认激活的路由（激活当前页面路由的菜单） -->
    <el-menu
      class="shadow bg-white/75 dark:bg-black/75 backdrop-blur-sm"
      :class="sidebar.collapse"
      :collapse="sidebar.collapse"
      :default-active="route.path"
      router
    >
      <SidebarItem :item="item" v-for="item in items" :key="item.name" />
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import { RouteRecordRaw, useRoute } from 'vue-router'
import router from '~/router'
import { useSidebarStore } from '~/store/sidebar'
import { useUserStore } from '~/store/user'
import SidebarItem from './SidebarItem.vue'

const sidebar = useSidebarStore()
// 获取当前页的路由
const route = useRoute()

let items = <RouteRecordRaw[]>[]

if (import.meta.env.VITE_PERMISSION_MODE === 'CONSTANT') {
  items = router.options.routes.filter((r) => !r.hidden)
  console.log(items, 'items')
}

items = items.sort(
  (a: RouteRecordRaw, b: RouteRecordRaw) => (a?.meta?.order || 0) - (b?.meta?.order || 0)
)
</script>
