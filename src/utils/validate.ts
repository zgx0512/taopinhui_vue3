/* 
自定义校验规则文件
 */
// 角色名称校验规则
export const roleNameValidatePass = (rule: any, value: any, callback: any) => {
  const reg = /^(?!\d+$)[\u4e00-\u9fa5\w]+$/
  if (reg.test(value)) {
    // 放行
    callback()
  } else {
    // 不符合，提示信息
    callback(new Error('用户名不能全为数字'))
  }
}

// 用户密码校验规则
export const passwordValidatePass = (rule: any, value: any, callback: any) => {
  const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
  if (reg.test(value)) {
    // 放行
    callback()
  } else {
    // 不符合，提示信息
    callback(new Error('密码长度至少6位，且至少包含1个字母跟1个数字'))
  }
  
}
