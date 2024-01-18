<template>
  <div id="main" class="map" ref="mapDom"></div>
</template>
​
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import echartMap from './echartMap'
import * as echarts from 'echarts'
import china from '~/components/echarts/json/china.json'
// 获取dom
const mapDom: any = ref(null)
//处理数据的方法函数
let mapRender = echartMap()
onMounted(() => {
  // 初始化画布
  const map = echarts.init(mapDom.value)
  // registerMap 注册一个地图
  echarts.registerMap('china', china as any)
  // 这个调用是进行地图的渲染
  map.setOption(mapRender(china.features))
})
</script>
<style>
.map {
  height: 300px;
  margin: auto;
}
</style>
