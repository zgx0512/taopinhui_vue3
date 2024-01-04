<template>
  <div class="container">
    <el-card style="margin-bottom: 10px">
      <el-form :inline="true" class="searchForm">
        <el-form-item label="角色名:">
          <el-input placeholder="请输入角色名" v-model="roleName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="search">搜索</el-button>
          <el-button type="primary" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <el-button icon="Plus" type="primary">添加用户</el-button>
      <el-button icon="Delete" type="danger">批量删除</el-button>
      <tph-table
        :tableData="tableData"
        :tableHeadList="tableHeadList"
        :tableProp="tableProp"
      >
      <el-button type="warning" icon="User" size="small">分配权限</el-button>
      <el-button type="primary" icon="Edit" size="small">编辑</el-button>
      <el-button type="danger" icon="Delete" size="small">删除</el-button>
    </tph-table>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { reqRoleInfo } from '~/api/acl/role'
// 表格的基础属性
const tableProp = {
  isSelect: true,
  center: true,
  index: true
}
// 角色表格的表头
const tableHeadList = [
  {
    label: '角色名称',
    property: 'roleName',
    width: '120'
  },
  {
    label: '创建时间',
    property: 'createTime',
    width: '180'
  },
  {
    label: '更新时间',
    property: 'updateTime',
    width: '180'
  },
  {
    label: '操作'
  }
]
const roleName = ref<string>('') // 搜索文本框绑定的属性
// 当前页
const page = ref<number>(1)
// 每页大小
const limit = ref<number>(10)
// 用户角色数据列表
const tableData = ref([])
// 页面挂载完毕时的回调
onMounted(() => {
  getRoleInfo()
})
// 获取角色列表数据的函数
const getRoleInfo = async () => {
  const result = await reqRoleInfo(page.value, limit.value)
  console.log(result)
  if (result.code === 200) {
    tableData.value = result.data.records
  }
}
const search = () => {
  // 搜索按钮的回调
}
const reset = () => {
  // 重置按钮的回调
}
</script>

<style lang="scss" scoped>
.searchForm {
  display: flex;
  justify-content: space-between;
}
</style>
