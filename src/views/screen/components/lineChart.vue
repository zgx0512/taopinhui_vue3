<template>
  <MyEchart :options="options" style="width: 100%; height: 180px"></MyEchart>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
// 引入组件
import MyEchart from '~/components/echarts/MyEchart.vue'
const options = reactive({
  title: {
    text: '历史对比',
    left: '15px',
    textStyle: {
      color: '#e60955',

    }
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['双十一', '年货节'],
    itemWidth: 40,
    itemHeight: 8,
    textStyle: {
      color: '#aaa'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '20%',
    containLabel: true
  },
  //   保存成图片
  //   toolbox: {
  //     feature: {
  //       saveAsImage: {}
  //     }
  //   },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2017年', '18年', '19年', '20年', '21年', '22年', '23年'],
    axisTick: {
      inside: true
    }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    interval: 40, // 步长
    axisLabel: {
      formatter: (value: number) => {
        return `${value}万`
      }
    },
    axisLine: {
      show: true
    },
    axisTick: {
      show: true,
      inside: true
    }
  },
  series: [
    {
      name: '双十一',
      type: 'line',
      data: [50, 70, 80, 100, 90, 110, 120],
      itemStyle: {
        color: '#fcfc00'
      }
    },
    {
      name: '年货节',
      type: 'line',
      data: [40, 65, 90, 105, 85, 100, 95],
      itemStyle: {
        color: '#e60955'
      }
    }
  ]
})
</script>

<style lang="scss" scoped></style>
