import { agAxios } from '@/utils/request'

import type { UserInfo } from './type'

// import type { UserInfo } from './type'

const userApi = {
  doUserNameLogin() {
    return agAxios.unstandardizedPost<{ token: string }>('/app/login', {
      username: 'cssqcsyh',
      password: '123456',
    })
  },

  getUserInfo(token: string) {
    return agAxios.unstandardizedGet<UserInfo>(
      '/system/user/profile',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  },
}

export { userApi }
