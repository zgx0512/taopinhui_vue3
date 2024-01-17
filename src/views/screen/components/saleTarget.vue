<!--
 * @Author: zgx 2324461523@qq.com
 * @Date: 2024-01-15 14:53:27
 * @LastEditors: zgx 2324461523@qq.com
 * @LastEditTime: 2024-01-16 17:45:30
 * @FilePath: \taopinhui_vue3\src\views\screen\components\saleTarget.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="target_container">
    <header>销售目标进度</header>
    <div class="demo-progress">
      <el-progress type="circle" :percentage="77.89" color="#db4a92" width="80">
        <template #default="{ percentage }">
          <span class="percentage-value">{{ percentage }}%</span>
          <span class="percentage-label">进度</span>
        </template>
      </el-progress>
      <targetBarChart></targetBarChart>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 引入柱状图组件
import targetBarChart from './targetBarChart.vue';
</script>

<style lang="scss" scoped>
.target_container {
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  background: linear-gradient(to left, #03A9F3, #03A9F3) left top no-repeat,
    linear-gradient(to bottom, #03A9F3, #03A9F3) left top no-repeat,
    linear-gradient(to left, #03A9F3, #03A9F3) right top no-repeat,
    linear-gradient(to bottom, #03A9F3, #03A9F3) right top no-repeat,
    linear-gradient(to left, #03A9F3, #03A9F3) left bottom no-repeat,
    linear-gradient(to bottom, #03A9F3, #03A9F3) left bottom no-repeat,
    linear-gradient(to left, #03A9F3, #03A9F3) right bottom no-repeat,
    linear-gradient(to left, #03A9F3, #03A9F3) right bottom no-repeat;
  background-size: 2px 20px, 20px 2px, 2px 20px, 20px 2px;
  border-radius: 10px;
  margin: 0 2px;
  header {
    color: #3fd6e3;
    margin-bottom: 10px;
  }
}
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 18px;
  color: #adadbf;
}
.percentage-label {
  display: block;
  margin-top: 5px;
  font-size: 10px;
  color: #adadbf;
}
:deep(.el-progress-circle__track) {
  stroke: #666;
}
</style>
