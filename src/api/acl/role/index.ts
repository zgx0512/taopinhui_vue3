import request from '~/utils/http/axios'
import type { roleInfoResponseType } from './type'
enum API {
  ROLEINFO_URL = '/admin/acl/role/'
}

// 获取角色列表的接口
export const reqRoleInfo = (page: number, limit: number) => {
  return request.get<roleInfoResponseType, any>(`${API.ROLEINFO_URL}${page}/${limit}`)
}
