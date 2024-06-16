// import router from '@/router'
import { useUserStoreWithout } from '@/store/modules/user'

export function doLoginOut() {
  const userStore = useUserStoreWithout()
  userStore.clearLoginInfo()
  //   router.push('/login')
}
