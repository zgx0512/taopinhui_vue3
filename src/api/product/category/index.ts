import request from '~/utils/http/axios'
// 引入ts类型
import type { categoryInfoResponseType } from './type'
enum API {
  CATEGORY1_URL = '/admin/product/getCategory1',
  CATEGORY2_URL = '/admin/product/getCategory2/',
  CATEGORY3_URL = '/admin/product/getCategory3/'
}

// 获取一级分类数据的接口
export const reqCategory1Info = () => {
  return request.get<categoryInfoResponseType, any>(API.CATEGORY1_URL)
}

// 获取二级分类数据的接口
export const reqCategory2Info = (category1Id: number | string) => {
  return request.get<categoryInfoResponseType, any>(API.CATEGORY2_URL + category1Id)
}

// 获取三级分类数据的接口
export const reqCategory3Info = (category2Id: number | string) => {
  return request.get<categoryInfoResponseType, any>(API.CATEGORY3_URL + category2Id)
}
