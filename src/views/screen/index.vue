<template>
  <div class="screen_container">
    <el-row style="color: #fff">
      <el-col :span="12" :offset="6" class="title">年货节实时战况</el-col>
      <el-col :span="6" class="time">{{ time }}</el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><saleTarget></saleTarget></el-col>
      <el-col :span="12"><real></real></el-col>
      <el-col :span="6"><hotGoods></hotGoods></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><lineChart></lineChart></el-col>
      <el-col :span="12">
        <el-row>
          <el-col :span="12"><radarChart></radarChart></el-col>
          <el-col :span="12"><scalePieChart></scalePieChart></el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
// 引入子组件
import saleTarget from './components/saleTarget.vue'
import real from './components/real.vue'
import hotGoods from './components/hotGoods.vue'
import lineChart from './components/lineChart.vue'
import radarChart from './components/radarChart.vue'
import scalePieChart from './components/scalePieChart.vue'
// 获取时间的函数
import { getCurrentTime } from '~/utils/getTime'
// 时间
const time = ref<string>(getCurrentTime())
// 定时器
const timeOut = ref<any>()
onMounted(() => {
  timeOut.value = setInterval(() => {
    time.value = getCurrentTime()
  }, 1000)
})
onUnmounted(() => {
  clearInterval(timeOut.value)
})
</script>

<style lang="scss" scoped>
@font-face {
  //引入
  font-family: 'UnidreamLED';
  src: url('~/assets/font/UnidreamLED.woff'); //路径
}
.screen_container {
  width: 100vm;
  height: 100vh;
  background: url('~/assets/images/bg.jpg') no-repeat;
  background-size: 100% 100%;
  .title {
    height: 60px;
    line-height: 60px;
    font-size: 30px;
    font-family: 'Simsun';
    font-weight: 700;
    text-align: center;
    // 字体发光效果
    text-shadow: 0 0 10px #166ef4, 0 0 20px #166ef4, 0 0 30px #166ef4, 0 0 40px #166ef4,
      0 0 70px #166ef4, 0 0 80px #166ef4, 0 0 100px #166ef4, 0 0 150px #166ef4;
  }
  .time {
    font-size: 35px;
    font-family: 'UnidreamLED';
    font-style: italic;
    text-align: right;
    line-height: 60px;
    padding-right: 20px;
  }
}
</style>
