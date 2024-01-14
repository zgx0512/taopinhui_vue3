<template>
  <div class="container">
    <el-row :gutter="16">
      <el-col :span="6" v-for="(item, index) in cardData"
        ><CountCard
          :title="item.title"
          :desc="item.desc"
          :count="item.count"
          :rate="item.rate"
          :icon="item.icon"
          :color="item.color"
        />
      </el-col>
    </el-row>
    <el-row :gutter="16" class="mt-4">
      <el-col :span="8"
        ><el-card><PieChart /></el-card
      ></el-col>
      <el-col :span="8"
        ><el-card><MyEchart :options="options3" style="height: 300px"></MyEchart></el-card
      ></el-col>
      <el-col :span="8"
        ><el-card><MyEchart :options="options4" style="height: 300px"></MyEchart></el-card
      ></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="Analysis">
import CountCard from './components/CountCard.vue'
import { reactive } from 'vue'
import PieChart from './components/PieChart.vue'

const cardData = [
  {
    title: '访问数',
    count: 134226,
    desc: 'visit numbers',
    rate: '+25.8%',
    icon: 'ep-ice-cream',
    color: 'orange'
  },
  {
    title: '品牌数',
    count: 8476,
    desc: 'download ',
    rate: '+0.8%',
    icon: 'ep-lollipop',
    color: 'blue'
  },
  {
    title: '销售额',
    count: 134226,
    desc: 'sales s',
    rate: '+9.16%',
    icon: 'ep-coffee-cup',
    color: 'indigo'
  },
  {
    title: '新用户数',
    count: 912,
    desc: 'new visitors',
    rate: '+5.1%',
    icon: 'ep-watermelon',
    color: 'purple'
  }
]

const options3 = reactive({
  title: {
    text: '访问趋势',
    left: 'left'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
})

const options4 = reactive({
  title: {
    text: '访问趋势',
    left: 'left'
  },
  xAxis: {
    type: 'category',
    data: ['用户数', '订单数', '商品数', '品牌数']
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: true
    }
  },
  series: [
    {
      data: [50, 260, 150, 40],
      type: 'bar'
    }
  ]
})
</script>
