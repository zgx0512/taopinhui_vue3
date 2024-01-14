<!--
 * @Author: zgx 2324461523@qq.com
 * @Date: 2023-07-16 05:52:36
 * @LastEditors: zgx 2324461523@qq.com
 * @LastEditTime: 2024-01-14 15:18:30
 * @FilePath: \taopinhui_vue3\src\layout\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <Layout :key="key">
    <router-view v-slot="{ Component }">
      <transition name="move" mode="out-in">
        <keep-alive :include="tags.nameList">
          <component :is="Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </Layout>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useTagsStore } from '~/store/tags'
import { useThemeStore } from '~/store/theme'
import DefaultLayout from './default/index.vue'
import VerticalLayout from './vertical/index.vue'

const tags = useTagsStore()
const useTheme = useThemeStore()
let key = ref(useTheme.layoutScheme)
let Layout = useTheme.layoutScheme === 'default' ? DefaultLayout : VerticalLayout

useTheme.$subscribe((mutation, state) => {
  Layout = state.layoutScheme === 'default' ? DefaultLayout : VerticalLayout
  key.value = state.layoutScheme
})
</script>
