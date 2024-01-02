/*
 * @Author: zgx 2324461523@qq.com
 * @Date: 2024-01-01 14:52:45
 * @LastEditors: zgx 2324461523@qq.com
 * @LastEditTime: 2024-01-02 16:35:14
 * @FilePath: \taopinhui_vue3\src\utils\token.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* 
  对token操作的文件
*/

// 获取token
export const getToken = () => {
    return sessionStorage.getItem('TOKEN')
}
// 存储token
export const setToken = (token: string) => {
    sessionStorage.setItem('TOKEN', token)
}
// 清空token
export const clearToken = () => {
    sessionStorage.removeItem('TOKEN')
}

