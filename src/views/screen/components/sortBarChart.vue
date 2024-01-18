<template>
  <MyEchart :options="options" style="height: 210px"></MyEchart>
</template>

<script lang="ts" setup>
import MyEchart from '~/components/echarts/MyEchart.vue'
import { reactive } from 'vue'
const options = reactive({
  dataset: [
    {
      dimensions: ['brand', 'saleValue', 'one', 'two', 'three', 'four'],
      source: [
        ['FILA', 1107, 284, 264, 276, 283],
        ['ANTA', 1014, 274, 254, 256, 230],
        ['LINING', 998, 254, 234, 246, 264],
        ['NIKE', 950, 244, 224, 256, 226],
        ['MOM', 900, 237, 244, 256, 163],
        ['F426', 850, 224, 214, 236, 176]
      ]
    },
    {
      transform: {
        type: 'sort',
        config: { dimension: 'saleValue', order: 'desc' }
      }
    }
  ],
  grid: {
    left: '50px',
    top: '10px',
    bottom: '30px',
  },
  xAxis: {
    type: 'category',
    axisLabel: { interval: 0, rotate: 30 },
    axisTick: {
      show: false, // 隐藏刻度线
      alignWithLabel: true
    }
  },
  barWidth: '60%',
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: (value: number) => {
        return `${value}件`
      }
    },
    splitLine: {
      show: false
    },
    interval: 300 // 步长
  },
  series: [
    {
      type: 'bar',
      stack: 'total',
      encode: { x: 'brand', y: 2 },
      datasetIndex: 1,
      itemStyle: {
        color: '#45d4e8'
      }
    },
    {
      type: 'bar',
      stack: 'total',
      encode: { x: 'brand', y: 3 },
      datasetIndex: 1,
      itemStyle: {
        color: '#34aeec'
      }
    },
    {
      type: 'bar',
      stack: 'total',
      encode: { x: 'brand', y: 4 },
      datasetIndex: 1,
      itemStyle: {
        color: '#2a8ce6'
      }
    },
    {
      type: 'bar',
      stack: 'total',
      encode: { x: 'brand', y: 5 },
      datasetIndex: 1,
      itemStyle: {
        color: '#1c6aec'
      },
      label: {
        show: true,
        position: 'top',
        color: '#aaa',
        fontSize: '8px',
        formatter: (param: any) => {
          return `${param.data[1]}件`
        }
      }
    }
  ]
})
</script>

<style lang="scss" scoped></style>
