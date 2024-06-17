import { agAxios, type AgResponseSuccess } from '@/utils/request'

import { systemApi } from '../system'
import type { Publicize, PublicizeType } from './fraud'

const fraudApi = {
  getPublicizeType() {
    return agAxios.unstandardizedGet<PublicizeType[]>('/fraud/publicizeType/list', {
      pageSize: 100,
    })
  },
  async getPublicizeList(params: any) {
    const res = await agAxios.get<Publicize[]>('/fraud/publicize/list', params)
    return transformData(res)
  },

  getCaseTypeType() {
    return agAxios.unstandardizedGet<PublicizeType[]>('/fraud/caseType/list', {
      pageSize: 100,
    })
  },
  async getCaseList(params: any) {
    const res = await agAxios.get<Publicize[]>('/fraud/case/list', params)
    return transformData(res)
  },
}

async function transformData(res: AgResponseSuccess<Publicize[]>) {
  const ids = res.rows
    .filter(r => r.img)
    .map(i => i.img)
    .join(',')

  if (!ids)
    return {
      ...res,
    }
  const ossList = await systemApi.getOSS(ids)
  const ossMap = ossList.reduce((map, item) => {
    map.set(item.ossId, item)
    return map
  }, new Map())

  return {
    ...res,
    rows: res.rows.map(i => {
      return {
        ...i,
        image: ossMap.get(i.img),
      }
    }),
  }
}

export { fraudApi }
