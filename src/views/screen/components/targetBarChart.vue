<template>
  <div>
    <MyEchart :options="options" style="width: 100%; height: 230px"></MyEchart>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import MyEchart from '~/components/echarts/MyEchart.vue'
const data1 = reactive([12, 11.2, 12.6, 12.2, 12.1])
const data2 = reactive([12.1, 10.2, 11, 13, 10])
const data3 = reactive([11.2, 11.2, 10, 13.2, 12.1])
const data4 = reactive([11, 9.8, 10.1, 15, 10])
// 计算总数
const totalData = () => {
  const data: number[] = []
  data1.forEach((item, index) => {
    data.push(item + data2[index] + data3[index] + data4[index])
  })
  return data
}
const options = reactive({
  xAxis: [
    {
      type: 'category',
      data: ['GAP', 'F426', 'LiNing', 'ANTA', 'FILA'],
      axisPointer: {
        type: 'shadow'
      },
      axisLabel: {
        interval: 0, // 解决横坐标轴隔一个显示的问题
        color: '#605c73'
      },
      axisTick: {
        show: false //刻度线
      },
      axisLine: {
        lineStyle: {
          color: '#2068ea' // 将红色作为X坐标轴线条的颜色
        }
      }
    },
    {
      type: 'category',
      data: ['GAP', 'F426', 'LiNing', 'ANTA', 'FILA'],
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitArea: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisPointer: {
        type: 'none'
      }
    } //这个坐标的不显示横坐标等等属性
  ],
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: (value: number) => {
        return `¥${value.toFixed(2)}万`
      }
    },
    interval: 25, // 步长
    splitLine: {
      show: false
    }
  },
  grid: {
    left: '2%',
    bottom: '30px',
    top: '20px',
    containLabel: true
  },
  legend: {
    show: true,
    data: ['实际', '目标'],
    bottom: '5px',
    itemWidth: 10,
    itemHeight: 5,
    textStyle: {
      color: '#aaa',
      fontSize: 10
    }
  },
  series: [
    {
      name: 'Evaporation',
      type: 'bar',
      xAxisIndex: 0, //展示在第一层横坐标上
      stack: 'total',
      data: data1,
      itemStyle: {
        color: '#46d2e7'
      }
    }, //实际数据展示，
    {
      name: 'Evaporation',
      type: 'bar',
      xAxisIndex: 0, //展示在第一层横坐标上
      stack: 'total',
      data: data2,
      itemStyle: {
        color: '#33b0e7'
      }
    }, //实际数据展示，
    {
      name: 'Evaporation',
      type: 'bar',
      xAxisIndex: 0, //展示在第一层横坐标上
      stack: 'total',
      data: data3,
      itemStyle: {
        color: '#2b89ed'
      }
    }, //实际数据展示，
    {
      name: '实际',
      type: 'bar',
      xAxisIndex: 0, //展示在第一层横坐标上
      stack: 'total',
      data: data4,
      itemStyle: {
        color: '#156df9'
      },
      label: {
        show: true,
        position: 'top',
        color: '#aaa',
        fontSize: '8px',
        formatter: (param: any) => {
          return `￥${totalData()[param.dataIndex].toFixed(2)}万`
        }
      }
    }, //实际数据展示，
    {
      name: 'Evaporation',
      xAxisIndex: 1, //展示在第二层横坐标上
      stack: 'Group1', //透明的目标柱状图叠加一小段横线，属性为相同值便可垂直叠加
      type: 'bar',
      itemStyle: {
        color: 'rgba(0,0,0,0)' /* 设置bar为透明色隐藏，撑起下面横线 */
      },
      label: {
        show: true,
        position: 'top',
        color: '#aaa',
        fontSize: '8px',
        formatter: (param: any) => {
          return `￥${param.data}万`
        }
      },
      data: [40, 50, 60, 90, 80] //目标值的数据
    },
    {
      name: '目标',
      xAxisIndex: 1, //展示在第二层横坐标上
      stack: 'Group1', //叠在透明的目标值柱状图上当做横线
      type: 'bar',
      itemStyle: {
        color: 'red' /* 设置bar为隐藏，撑起下面横线 */
      },
      barWidth: '80%',
      data: [0.8, 0.8, 0.8, 0.8, 0.8]
    }
  ]
})
</script>

<style lang="" scoped></style>
