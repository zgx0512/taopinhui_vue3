<template>
  <el-table border class="table" :data="tableData" size="small" max-height="300px">
    <el-table-column type="index" align="center">
      <template #default="{ $index }">
        <div style="display: flex; align-items: center; justify-content: center">
          <svg-icon
            v-if="$index <= 2"
            :name="$index === 0 ? 'one' : $index === 1 ? 'two' : 'three'"
            style="width: 10px;height: 20px;"
          ></svg-icon>
          <span style="margin-left: 2px">{{ $index + 1 }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="省份" align="center"></el-table-column>
    <el-table-column prop="saleValue" label="销售额" align="center"></el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const tableData = ref([
  {
    id: '1',
    name: '广东省',
    saleValue: '￥38万'
  },
  {
    id: '2',
    name: '上海市',
    saleValue: '￥35万'
  },
  {
    id: '3',
    name: '北京市',
    saleValue: '￥32万'
  },
  {
    id: '4',
    name: '浙江省',
    saleValue: '￥30万'
  },
  {
    id: '5',
    name: '江苏省',
    saleValue: '￥28万'
  },
  {
    id: '6',
    name: '福建省',
    saleValue: '￥28万'
  },
  {
    id: '7',
    name: '海南省',
    saleValue: '￥25万'
  },
  {
    id: '8',
    name: '四川省',
    saleValue: '￥22万'
  },
  {
    id: '9',
    name: '湖南省',
    saleValue: '￥21万'
  },
  {
    id: '10',
    name: '山东省',
    saleValue: '￥18万'
  }
])
</script>

<style lang="scss">
.table {
  --el-table-border-color: #0c3168;
  --el-table-text-color: #bdbdbe;
  --el-table-header-text-color: #bdbdbe;
  --el-table-row-hover-bg-color: transparent;
  --el-table-current-row-bg-color: transparent;
  --el-table-header-bg-color: transparent;
  --el-table-bg-color: transparent;
  --el-table-tr-bg-color: transparent;
  font-size: 8px;
  width: 200px;
  margin: 25px 0 0 40px;
  .el-table__cell {
    padding: 0 !important;
  }
  .cell {
    line-height: 20px;
  }
  th.cell {
    font-weight: 700;
    font-size: 12px;
  }
}
</style>
