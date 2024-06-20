import { agAxios, type AgResponseSuccess } from '@/utils/request'

import { systemApi } from '../system'
import type { Publicize, PublicizeType } from './fraud'

const fraudApi = {
  getPublicizeType() {
    return agAxios.get<PublicizeType[]>('/fraud/publicizeType/list', {
      pageSize: 100,
    })
  },
  async getPublicizeList(params: any) {
    const res = await agAxios.getList<Publicize[]>('/fraud/publicize/list', params)
    return transformData(res)
  },

  getCaseTypeType() {
    return agAxios.get<PublicizeType[]>('/fraud/caseType/list', {
      pageSize: 100,
    })
  },
  async getCaseList(params: any) {
    const res = await agAxios.getList<Publicize[]>('/fraud/case/list', params)
    return transformData(res)
  },

  async getPostDetail(params: { type: string; id: string }) {
    const res = await agAxios.get<Publicize>(`/fraud/${params.type}/${params.id}`)

    const oss = await systemApi.getOSS(res.img)

    return { ...res, image: oss[0] }
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
