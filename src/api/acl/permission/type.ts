// 共有的ts类型
interface responseType {
  code: number
  message: string
  ok: boolean
}
// 每个菜单的ts类型
export interface permissionResponseType {
  id?: number
  createTime?: string
  updateTime?: string
  pid?: string
  name?: string
  code?: string | null
  toCode?: string | null
  type?: number
  status?: string | null
  level?: number
  children?: permissionResponseType[]
  select?: boolean
}
// 获取菜单数据的接口的返回值的ts类型
export interface permissionInfoResponseType extends responseType {
  data: permissionResponseType[]
}
