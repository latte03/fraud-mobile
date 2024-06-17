import { agAxios } from '@/utils/request'

import type { OSSItem } from './oss'

export const systemApi = {
  getOSS(ids: any) {
    return agAxios.unstandardizedGet<OSSItem[]>(`/system/oss/listByIds/${ids}`)
  },
}
