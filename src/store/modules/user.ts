import dayjs from 'dayjs'
import { defineStore } from 'pinia'
import { ref } from 'vue'

import { userApi } from '@/api'
// import type { LoginParams } from '@/api/user'
import type { UserInfo } from '@/api/user/type'
import { store } from '@/store'
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const loginInfo = ref<UserInfo | undefined>()

    const tokenSetTime = ref('')

    async function doLogion() {
      const res = await userApi.doUserNameLogin()

      token.value = res.token

      await getUserInfoByToken()
      return Promise.resolve({ data: res, success: true })
    }

    async function getUserInfoByToken() {
      const res = await userApi.getUserInfo(token.value)

      setTokenInfo({ info: res, token: token.value })
      return Promise.resolve({ data: res, success: true })
    }

    async function doSSLogion(params: { zj_unicom_token: string }) {
      //   const res = await userApi.SSLogin(params)
      //   if (res.data) {
      //     setTokenInfo({ info: res.data, token: res.data.token })
      //     return Promise.resolve({ data: res, success: true })
      //   } else {
      //     Message.error({
      //       content: res.msg,
      //     })
      //     return Promise.resolve({ data: res, success: false })
      //   }
    }
    function clearLoginInfo() {
      token.value = ''
      loginInfo.value = undefined
    }

    async function setUserInfoByKey(key: string) {
      //   const res = await userApi.getTokenByKey(key)
      //   setTokenInfo({ info: res.data, token: res.data.token })
    }

    function setTokenInfo(res: { info: UserInfo; token: string }) {
      loginInfo.value = { ...loginInfo.value, ...res.info }
      token.value = res.token
      tokenSetTime.value = dayjs().toJSON()
    }

    return {
      token,
      loginInfo,
      tokenSetTime,
      doSSLogion,
      setTokenInfo,
      setUserInfoByKey,
      doLogion,
      clearLoginInfo,
    }
  },
  {
    persist: true,
  }
)

export const useUserStoreWithout = () => {
  return useUserStore(store)
}
