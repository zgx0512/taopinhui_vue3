<!--
 * @Author: zgx 2324461523@qq.com
 * @Date: 2023-12-22 22:29:52
 * @LastEditors: zgx 2324461523@qq.com
 * @LastEditTime: 2024-01-13 17:19:18
 * @FilePath: \taopinhui_vue3\src\views\dashboard\components\PieChart.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <MyEchart :options="options" style="height: 300px"></MyEchart>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import MyEchart from '~/components/echarts/MyEchart.vue'

const options = reactive({
  // 提示框
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {d}%'
  },
  // 饼图的位置
  legend: {
    left: 'center'
  },
  // 饼图里面的配置
  series: [
    {
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: 'bold',
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Vue' },
        { value: 735, name: 'TypeScript' },
        { value: 320, name: 'CSS' },
        { value: 484, name: 'HTML' },
        { value: 150, name: 'Other' }
      ]
    }
  ]
})
</script>
