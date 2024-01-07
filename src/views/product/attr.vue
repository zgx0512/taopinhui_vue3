<template>
  <div class="container">
    <!-- 分类选择器卡片 -->
    <el-card style="margin-bottom: 10px; height: 74px">
      <Category @initCategory="initCategory"></Category>
    </el-card>
    <!-- 数据展示卡片 -->
    <el-card>
      <el-button type="primary" icon="Plus" :disabled="!category3Id">添加属性</el-button>
      <tph-table
        :tableData="attrForm"
        :tableHeadList="tableHeadList"
        :tableProp="tableProp"
      ></tph-table>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// 引入分类选择器组件
import Category from '~/components/category.vue'
// 属性数据表格表头
const tableHeadList = [
  {
    label: '属性名称',
    property: 'attrName',
    width: '180'
  },
  {
    label: '属性值名称',
    property: 'attrValueName',
    width: '300'
  },
  {
    label: '操作'
  }
]
// 表格基本属性
const tableProp = {
  index: true,
  isAttr: true
}
// 一级分类id
const category1Id = ref<string>('')
// 二级分类id
const category2Id = ref<string>('')
// 三级分类id
const category3Id = ref<string>('')
// 接收子组件传递过来的分类id
const initCategory = (ids) => {
  category1Id.value = ids.category1Id
  category2Id.value = ids.category2Id
  category3Id.value = ids.category3Id
}
</script>

<style lang="" scoped></style>
