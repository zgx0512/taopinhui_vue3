<template>
  <el-row style="color: #fff">  
    <el-col :span="12"><amount></amount></el-col>
    <el-col :span="12"><ordersCount></ordersCount></el-col>
    <el-col :span="12"><rank></rank></el-col>
    <el-col :span="12"><echartMap></echartMap></el-col>
  </el-row>
</template>

<script lang="ts" setup>
// 引入子组件
import amount from './amount.vue'
import ordersCount from './ordersCount.vue';
import rank from './rank.vue'
import echartMap from './echartMap/index.vue'
</script>

<style lang="" scoped></style>
