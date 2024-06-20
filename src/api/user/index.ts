import { agAxios } from '@/utils/request'

import type { UserInfo } from './type'

// import type { UserInfo } from './type'

const userApi = {
  doUserNameLogin() {
    return agAxios.post<{ token: string }>('/app/login', {
      username: 'cssqcsyh',
      password: '123456',
    })
  },

  getUserInfo(token: string) {
    return agAxios.get<UserInfo>(
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
