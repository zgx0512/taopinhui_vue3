import request from '~/utils/http/axios'
// 引入ts类型
import {
  spuInfoResponseType,
  saleAttrInfoResponseType,
  spuResponseType,
  nullResponseType
} from './type'

enum API {
  SPULIST_URL = '/admin/product/',
  SALEATTRINFO_URL = '/admin/product/baseSaleAttrList',
  ADDSPU_URL = '/admin/product/saveSpuInfo',
  UPDATESPU_URL = '/admin/product/updateSpuInfo',
  GETSPUINFO_URL = '/admin/product/getSpuInfo/'
}

// 获取spu数据的接口
export const reqSpuInfo = (page: number, limit: number, category3Id: number | string) => {
  return request.get<spuInfoResponseType, any>(
    `${API.SPULIST_URL}${page}/${limit}?category3Id=${category3Id}`
  )
}

// 获取基础销售属性的接口
export const reqSaleAttrInfo = () => {
  return request.get<saleAttrInfoResponseType, any>(API.SALEATTRINFO_URL)
}

// 新增|编辑SPU的接口
export const reqAddOrUpdateSPU = (data: spuResponseType) => {
  if (data.id) {
    // 存在，是修改
    return request.post<nullResponseType, any>(API.UPDATESPU_URL, data)
  } else {
    return request.post<nullResponseType, any>(API.ADDSPU_URL, data)
  }
}

// 获取当前spu的所有数据
export const reqSpuFormId = (spuId: number | string) => {
  return request.get<spuResponseType, any>(API.GETSPUINFO_URL + spuId)
}
