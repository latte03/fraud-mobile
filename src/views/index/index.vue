<script lang="ts" setup>
import { useAssetsImageURL } from '@composables/url-composable'

import { useUserStore } from '@/store/modules/user'
import { isDev } from '@/utils/constant'

// import { sha } from '~build/git'
definePage({
  name: 'IndexPage',
  path: '/',
  meta: {
    title: '首页',
    layout: 'tab-bar-layout',
    icon: 'tab-bar-outline-home',
    activeIcon: 'tab-bar-fill-home',
    sort: 1,
  },
})

const banner = useAssetsImageURL('banner', { extension: '.png' })
const pt1 = useAssetsImageURL('pt1', { extension: '.png' })
const pt2 = useAssetsImageURL('pt2', { extension: '.png' })
const userStore = useUserStore()
</script>

<template>
  <div>
    <van-button v-if="isDev" @click="userStore.doLogion">login</van-button>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img :src="banner" alt="" srcset="" />
      </van-swipe-item>
    </van-swipe>

    <div class="p-4">
      <div class="alarm flex p-3" :style="{ '--bg-alarm': `url(${pt2})` }">
        <i class="icon" :style="{ '--bg-icon': `url(${pt1})` }" />

        <div class="flex-y-center flex-grow justify-between pl-2">
          <div class="mr-2 flex-grow-1">
            <div class="title">指尖举报</div>
            <div class="van-ellipsis opacity-75 text-sm-1">ddddd</div>
          </div>

          <div>
            <van-button round type="default" size="small">我要举报</van-button>
          </div>
        </div>
      </div>
    </div>

    <div class="p-4">
      <div class="section-title">最新案例</div>

      <div>
        <CaseCard />
        <CaseCard />
      </div>
    </div>
  </div>
</template>

<style lang="less">
.icon {
  display: block;
  width: 40px;
  height: 40px;
  background: var(--bg-icon);
  background-size: 100% 100%;
}

.alarm {
  background: var(--bg-alarm);
  background-size: 100% 100%;
}

.title {
  font-size: 14px;
  font-weight: 800;
}

.section-title {
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 800;
}
</style>
