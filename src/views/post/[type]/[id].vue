<script lang="ts" setup>
import { showLoadingToast, type ToastWrapperInstance } from 'vant'
import { useRequest } from 'vue-request'

import { fraudApi } from '@/api/fraud'

defineOptions({
  name: 'PostPage',
})
definePage({
  name: 'PostTypePage',
  meta: {
    layout: 'default-layout',
  },
})

const route = useRoute()

const { type, id } = route.params as Record<string, any>
const loadingToastRef = shallowRef<ToastWrapperInstance | null>(null)

const { data } = useRequest(fraudApi.getPostDetail, {
  defaultParams: [{ type, id }],
  onSuccess() {
    loadingToastRef.value?.close()
  },
})

onMounted(() => {
  loadingToastRef.value = showLoadingToast({
    duration: 0,
    message: '加载中..',
  })
})
</script>

<template>
  <div class="post-page">
    <van-image width="100%" height="56vw" :src="data?.image.url" />
    <div class="title-wrap absolute px-4">
      <div class="title-body rounded-md p-4 py-3">
        <div class="post-title text-xl">
          {{ data?.title }}
        </div>
        <div class="post-time mt-2 opacity-50 text-sm-1">
          {{ data?.updateTime }}
        </div>
      </div>
    </div>
    <div class="post-content px-5 pt-16">
      <div v-html="data?.content" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.title-wrap {
  z-index: 9;
  width: 100vw;
  transform: translateY(-50%);
}

.title-body {
  background-color: rgb(255 255 255);
  box-shadow: 0 3px 12px rgb(30 19 19 / 10%);
}
</style>
