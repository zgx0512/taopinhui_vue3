<template>
  <el-drawer v-model="addOrUpdateUserDrawer" :title="title">
    <el-form :model="formData" :rules="rules" ref="userFormRef">
      <el-form-item label="用户姓名" prop="username">
        <el-input placeholder="请输入用户姓名" v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="用户昵称" prop="name">
        <el-input placeholder="请输入用户昵称" v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="password" v-if="!formData.id">
        <el-input placeholder="请输入用户密码" v-model="formData.password"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="addOrUpdateUserDrawer = false">取消</el-button>
        <el-button type="primary" @click="submit" :loading="loading">确认</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref, nextTick, defineEmits } from 'vue'
// 引入自定义校验规则
import { passwordValidatePass } from '~/utils/validate'
// 引入接口函数
import { reqAddOrUpdateUser } from '~/api/acl/user'
import { ElMessage } from 'element-plus'
import { userResponseType } from '~/api/acl/user/type'
const addOrUpdateUserDrawer = ref<boolean>(false)
// 父组件传递过来的函数
const emits = defineEmits(['submit'])
const title = ref<string>('添加用户')
const formData = ref<userResponseType>({
  id: '',
  username: '',
  name: '',
  password: ''
})
// 用户信息表单的ref对象
const userFormRef = ref()
// 表单校验规则
const rules = ref({
  username: [
    { required: true, message: '用户姓名不能为空', trigger: 'blur' },
    { min: 3, max: 10, message: '用户姓名长度在3-10之间', trigger: 'blur' }
  ],
  name: [
    { required: true, message: '用户昵称不能为空', trigger: 'blur' },
    { min: 3, max: 10, message: '用户昵称长度在3-10之间', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '用户密码不能为空', trigger: 'blur' },
    { validator: passwordValidatePass, trigger: 'blur' }
  ]
})
// 确认按钮加载效果
const loading = ref<boolean>(false)
const open = (row: userResponseType) => {
  // 打开抽屉
  addOrUpdateUserDrawer.value = true
  if (row.id) {
    title.value = '修改用户'
    formData.value = JSON.parse(JSON.stringify(row))
  } else {
    title.value = '添加用户'
    // 清空表单数据
    formData.value = {
      id: '',
      username: '',
      name: '',
      password: ''
    }
  }
  // 清空校验的提示信息
  nextTick(() => {
    userFormRef.value?.clearValidate()
  })
}
// 确认按钮的回调
const submit = () => {
  // 表单校验
  if (!userFormRef.value) return
  userFormRef.value.validate(async (valid: boolean) => {
    if (valid) {
      // 表单校验通过
      loading.value = true
      // 发送请求，添加|修改用户
      const result = await reqAddOrUpdateUser(formData.value)
      if (result.code === 200) {
        loading.value = false
        // 成功的提示信息
        ElMessage({
          type: 'success',
          message: '保存成功'
        })
      } else {
        // 失败的提示信息
        ElMessage({
          type: 'error',
          message: '保存失败'
        })
        loading.value = false
      }
      // 调用父组件的函数，重新加载用户数据
      emits('submit', formData.value.id)
      // 关闭抽屉
      addOrUpdateUserDrawer.value = false
    } else {
      console.log('error submit!')
    }
  })
}
defineExpose({
  open
})
</script>

<style lang="" scoped></style>
