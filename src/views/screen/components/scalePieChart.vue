<template>
  <MyEchart :options="options" style="width: 100%; height: 180px"></MyEchart>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
// 引入组件
import MyEchart from '~/components/echarts/MyEchart.vue'
const options = reactive({
  title: {
    text: '销售额统计',
    textStyle: {
      color: '#1c6aec',
      fontSize: '16'
    }
  },
  // toolbox: {
  //   show: true,
  //   feature: {
  //     mark: { show: true },
  //     dataView: { show: true, readOnly: false },
  //     restore: { show: true },
  //     saveAsImage: { show: true }
  //   }
  // },
  tooltip: {
    trigger: 'item',
    formatter: '{a}<br>{b} : {c}万 ({d}%)'
  },
  series: [
    {
      name: '销售额统计',
      type: 'pie',
      radius: [15, 70],
      center: ['50%', '50%'],
      roseType: 'area',
      data: [
        { value: 100, name: '数码' },
        { value: 52, name: '服装' },
        { value: 48, name: '电脑' },
        { value: 40, name: '日常用品' },
        { value: 35, name: '美妆' },
        { value: 25, name: '零食饮品' }
      ],
      labelLine: {
        show: true,
        length: 1//第一段长度
      },
      top: '30px'
    }
  ]
})
</script>

<style lang="scss" scoped></style>
