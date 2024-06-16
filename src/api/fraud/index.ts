import { agAxios } from '@/utils/request'

import type { Publicize, PublicizeType } from './fraud'

const fraudApi = {
  getPublicizeType() {
    return agAxios.get<PublicizeType[]>('/fraud/publicizeType/list', {
      pageSize: 100,
    })
  },
  getPublicizeList(params: any) {
    return agAxios.get<Publicize[]>('/fraud/publicize/list', params)
  },

  getCaseTypeType() {
    return agAxios.get<PublicizeType[]>('/fraud/caseType/list', {
      pageSize: 100,
    })
  },
  getCaseList(params: any) {
    return agAxios.get<Publicize[]>('/fraud/case/list', params)
  },
}

export { fraudApi }
