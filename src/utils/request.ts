import Axios, { type AxiosRequestConfig } from 'axios'
import { showFailToast } from 'vant'

import { useUserStoreWithout } from '@/store/modules/user'

import { baseURL } from './constant'
import { doLoginOut } from './permission'

const axios = Axios.create({
  baseURL,
  headers: {},
})

axios.interceptors.request.use(
  config => {
    const userStore = useUserStoreWithout()

    const TOKEN = userStore.token
    if (TOKEN && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${TOKEN}`
    }
    return config
  },
  error => Promise.reject(error)
)

axios.interceptors.response.use(
  res => {
    if (res.data.code === 403) {
      doLoginOut()
      return Promise.reject('重新登陆')
    }

    if (res.data.code === 500) {
      showFailToast('系统错误')
      return Promise.reject('系统错误')
    }
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export interface AgResponse {
  code: number | string
  msg: string
}
export interface AgResponseError extends AgResponse {
  data: null
  success: false
}
export interface AgResponseSuccess<T> extends AgResponse {
  data: T
  rows: T
  success: true
}
class AgAxios {
  post = async <T>(url: string, params: any, config?: AxiosRequestConfig<any> | undefined) => {
    const res = await axios.post<AgResponseSuccess<T>>(url, params, config)
    console.log('%c Line:42 🎂 res', 'color:#fca650', res)
    if (res.data.code === 200) {
      return res.data?.data
    } else {
      showFailToast(res.data.msg)
      return Promise.reject(res.data)
    }
  }

  /**
   *
   * @deprecated
   * @returns
   */
  unstandardizedPost = async <T = any>(
    url: string,
    params?: any,
    config?: AxiosRequestConfig<any> | undefined
  ) => {
    const res = await axios.post<T>(url, params, config)
    return res.data
  }

  /**
   *
   * @deprecated
   * @returns
   */
  unstandardizedGet = async <T = any>(
    url: string,
    params?: any,
    config?: AxiosRequestConfig<any> | undefined
  ) => {
    const res = await axios.get<T>(url, { params, ...config })
    return res.data
  }

  get = async <T = any>(
    url: string,
    params?: any,
    config?: AxiosRequestConfig<any> | undefined
  ) => {
    const res = await axios.get<AgResponseSuccess<T>>(url, { params, ...config })
    return res.data.data || res.data.rows
  }
}
export { axios }
const agAxios = new AgAxios()

export { agAxios }
