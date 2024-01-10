import request from '~/utils/http/axios'
// 引入ts类型
import type {
  tmInforResponseType,
  tmResponseType,
  tmListResponseType,
  removeTmResponseType
} from './type'

enum API {
  TRADEMARKINFO_URL = '/admin/product/baseTrademark/',
  ADDTM_URL = '/admin/product/baseTrademark/save',
  UPDATETM_URL = '/admin/product/baseTrademark/update',
  TRADEMARKLIST_URL = '/admin/product/baseTrademark/getTrademarkList',
  REMOVETM_URL = '/admin/product/baseTrademark/remove/'
}

// 获取品牌数据的接口
export const reqTrademarkInfo = (page: number, limit: number) => {
  return request.get<tmInforResponseType, any>(`${API.TRADEMARKINFO_URL}${page}/${limit}`)
}

// 新增|修改品牌的接口
export const reqAddorUpdateTM = (data: tmResponseType) => {
  if (data.id) {
    // 是修改
    return request.put(API.UPDATETM_URL, data)
  } else {
    return request.post(API.ADDTM_URL, data)
  }
}

// 获取全部品牌数据的接口
export const reqTmList = () => {
    return request.get<tmListResponseType, any>(API.TRADEMARKLIST_URL)
}

// 删除品牌的接口
export const reqRemoveTm = (id: number | string) => {
    return request.delete<removeTmResponseType, any>(API.REMOVETM_URL + id)
}