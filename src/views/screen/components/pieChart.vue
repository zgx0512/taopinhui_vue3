<template>
  <MyEchart :options="options" style="height: 80px"></MyEchart>
</template>

<script lang="ts" setup>
// 引入组件
import MyEchart from '~/components/echarts/MyEchart.vue'
import { reactive } from 'vue'
const options = reactive({
  legend: {
    top: '22px',
    right: '60px',
    width: '20px',
    itemWidth: 8,
    itemHeight: 8,
    textStyle: {
      fontSize: 10
    }
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      top: -15,
      bottom: -15,
      label: {
        show: false,
        position: 'center',
        color: '#aaa',
        fontSize: 8
      },
      itemStyle: {
        color: (param: any) => {
          const colorList = ['#ef519d', '#132a6d']
          return colorList[param.dataIndex]
        },
        borderColor: '#011427',
        borderWidth: 3
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 14,
          fontWeight: 'bold',
          formatter: (param: any) => {
            return `${param.name}\n${param.percent}%`
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '女装' },
        { value: 735, name: '男装' }
      ]
    }
  ]
})
</script>

<style lang="" scoped></style>
