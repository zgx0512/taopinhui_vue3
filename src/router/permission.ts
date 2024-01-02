// /*
//  * @Author: zgx 2324461523@qq.com
//  * @Date: 2023-07-16 05:52:36
//  * @LastEditors: zgx 2324461523@qq.com
//  * @LastEditTime: 2023-12-29 15:42:55
//  * @FilePath: \taopinhui_vue3\src\router\permission.ts
//  * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
//  */
// // import router from '~/router'
// // import { useUserStore } from '~/store/user'
// // import { addAsyncRoutes } from '~/utils/permission'

// // // 路由白名单
// // const whiteList = ['/login']

// // router.beforeEach(async (to) => {
// //   document.title = `${to.meta.title} | mocha vue3 admin`

// //   const useUser = useUserStore()
// //   const role = useUser.role

// //   // 用户已登录
// //   if (useUser.userid) {
// //     if (to.path === '/login') {
// //       return '/'
// //     }
// //     // 前端固定路由模式，如果没有权限，进入403页面
// //     if (
// //       import.meta.env.VITE_PERMISSIOIN_MODE === 'CONSTANT' &&
// //       to.meta.roles &&
// //       !to.meta.roles.includes(role)
// //     ) {
// //       return '/403'
// //     }
// //     // 前端动态路由和后端动态路由，动态挂载路由
// //     else {
// //       if (!to.redirectedFrom) {
// //         await addAsyncRoutes(router)

// //         return { ...to, replace: true }
// //       } else return true
// //     }
// //   } else {
// //     // 白名单，直接放行
// //     if (whiteList.indexOf(to.path) > -1) return true
// //     // 非白名单，去登录
// //     else return '/login'
// //   }
// // })
