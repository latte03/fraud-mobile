<script setup lang="ts">
import { ConfigProvider } from 'vant'
import { RouterView } from 'vue-router'

import { useRouteStore } from '@/store/modules/route'

import { useDesignSetting } from './composables/setting/design-setting-composable'
const routeStore = useRouteStore()

const { getDarkMode, getIsPageAnimate, getPageAnimateType } = useDesignSetting()

// 需要缓存的路由组件
const keepAliveComponents = computed(() => routeStore.keepAliveComponents)

const getTransitionName = computed(() => {
  return unref(getIsPageAnimate) ? unref(getPageAnimateType) : undefined
})
</script>

<template>
  <ConfigProvider :theme="getDarkMode">
    <RouterView v-slot="{ Component }">
      <div class="absolute bottom-0 top-0 h-screen w-full overflow-hidden">
        <transition :name="getTransitionName" mode="out-in" appear>
          <keep-alive v-if="keepAliveComponents" :include="keepAliveComponents">
            <component :is="Component" />
          </keep-alive>
        </transition>
      </div>
    </RouterView>
  </ConfigProvider>
</template>
