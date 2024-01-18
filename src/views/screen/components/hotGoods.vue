<template>
  <div class="hot_goods_container">
    <header>最受欢迎商品</header>
    <pieChart></pieChart>
    <sortBarChart></sortBarChart>
    </div>
</template>

<script lang="ts" setup>
import pieChart from './pieChart.vue'
import sortBarChart from './sortBarChart.vue';
</script>

<style lang="scss" scoped>
.hot_goods_container {
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  background: linear-gradient(to left, #03a9f3, #03a9f3) left top no-repeat,
    linear-gradient(to bottom, #03a9f3, #03a9f3) left top no-repeat,
    linear-gradient(to left, #03a9f3, #03a9f3) right top no-repeat,
    linear-gradient(to bottom, #03a9f3, #03a9f3) right top no-repeat,
    linear-gradient(to left, #03a9f3, #03a9f3) left bottom no-repeat,
    linear-gradient(to bottom, #03a9f3, #03a9f3) left bottom no-repeat,
    linear-gradient(to left, #03a9f3, #03a9f3) right bottom no-repeat,
    linear-gradient(to left, #03a9f3, #03a9f3) right bottom no-repeat;
  background-size: 2px 20px, 20px 2px, 2px 20px, 20px 2px;
  border-radius: 10px;
  margin: 0 2px;
  header {
    color: #3fd6e3;
    margin-bottom: 10px;
  }
}
</style>
