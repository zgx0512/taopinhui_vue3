import request from '~/utils/http/axios'
// 接口ts类型文件
import type { permissionInfoResponseType } from './type'
enum API {
  PERMISSONINFO_URL = '/admin/acl/permission'
}

// 获取菜单数据的接口
export const reqPermissionInfo = () => {
  return request.get<permissionInfoResponseType, any>(API.PERMISSONINFO_URL)
}
