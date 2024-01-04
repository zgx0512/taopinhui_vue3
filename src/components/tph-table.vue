<template>
  <el-table :data="props.tableData" border style="margin: 10px 0;">
    <el-table-column type="selection" width="55" v-if="props.tableProp.isSelect" align="center" />
    <el-table-column
      type="index"
      label="#"
      width="55"
      align="center"
      v-if="props.tableProp.index"
    ></el-table-column>
    <el-table-column
      v-for="(item, index) in props.tableHeadList"
      :key="index"
      :label="item.label"
      :property="item.property"
      :width="item.width"
      align="center"
      show-overflow-tooltip
    >
      <slot v-if="item.label === '操作'"></slot>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'
const props = withDefaults(
  defineProps<{
    tableHeadList: {
      label: string
      property?: string
      width?: string
    }[]
    tableData: never[]
    tableProp: {
      isSelect: boolean
      index: boolean
    }
  }>(),
  {
    tableProp: () => ({
      isSelect: false,
      index: false
    })
  }
)
</script>

<style lang="" scoped></style>
