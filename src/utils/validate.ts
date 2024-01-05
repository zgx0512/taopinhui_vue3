/* 
自定义校验规则文件
 */
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
