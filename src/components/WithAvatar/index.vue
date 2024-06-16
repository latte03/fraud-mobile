<script lang="ts" setup>
import { useAssetsImageURL } from '@/composables/url-composable'
import { useUserStore } from '@/store/modules/user'

defineOptions({
  name: 'Avatar',
})
const userStore = useUserStore()

const avatarMan = useAssetsImageURL('avatar-man')
const avatarWomen = useAssetsImageURL('avatar-women')

const defaultAvatar = computed(() => {
  return userStore.loginInfo?.user.sex === '0' ? avatarMan.value : avatarWomen.value
})

const avatar = computed(() => {
  return userStore.loginInfo?.user.avatar || defaultAvatar.value
})
</script>

<template>
  <div class="flex-y-center">
    <van-image round width="80px" height="80px" :src="avatar" />

    <div class="ml-4">
      <div class="mb-1 text-xl font-600">您好，{{ userStore.loginInfo?.user.nickName }}</div>
      <div>点击查看个人信息 ></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Avatar {
}
</style>
