import { agAxios } from '@/utils/request'

import type { OSSItem } from './oss'

export const systemApi = {
  getOSS<T = OSSItem[]>(ids: any) {
    return agAxios.get<T>(`/system/oss/listByIds/${ids}`)
  },
}
