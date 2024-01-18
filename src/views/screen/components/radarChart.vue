<template>
  <MyEchart :options="options" style="width: 100%; height: 180px"></MyEchart>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
// 引入组件
import MyEchart from '~/components/echarts/MyEchart.vue'
const options = reactive({
  title: {
    text: '男女消费统计',
    textStyle: {
      color: '#1c6aec',
      fontSize: '16'
    }
  },
  legend: {
    data: ['女生', '男生'],
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      color: '#aaa'
    },
    top: '10px',
    right: '10px'
  },
  radar: {
    indicator: [
      { name: 'FILA' },
      { name: 'ANTA' },
      { name: 'NIKE' },
      { name: 'F426' },
      { name: 'GAP' },
      { name: 'MOM' }
    ],
    radius: 50
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [420, 300, 2000, 3500, 4800, 1800],
          name: '女生',
          itemStyle: {
            color: '#e60955'
          }
        },
        {
          value: [590, 1100, 2800, 2600, 3200, 2100],
          name: '男生',
          itemStyle: {
            color: '#5470c6'
          }
        }
      ]
    }
  ]
})
</script>

<style lang="scss" scoped></style>
