// 共有的ts类型
interface responseType {
  code: number
  message: string
  ok: boolean
}

// 每个分类的ts类型
export interface categoryResponseType {
  id?: number | string
  createTime?: string
  updateTime?: string
  name?: string
}
// 获取商品分类接口返回值的ts类型
export interface categoryInfoResponseType extends responseType {
  data: categoryResponseType[]
}
