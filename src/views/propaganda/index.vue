<script lang="ts" setup>
import { fraudApi } from '@/api/fraud'

defineOptions({
  name: 'PropagandaPage',
})
definePage({
  name: 'PropagandaPage',
  meta: {
    layout: 'tab-bar-layout',
    title: '宣传',
    icon: 'tab-bar-outline-propaganda',
    activeIcon: 'tab-bar-fill-propaganda',
    sort: 2,
  },
})

const active = ref(0)
</script>

<template>
  <van-tabs v-model:active="active" animated sticky>
    <van-tab title="宣传">
      <Propaganda
        :type-request="fraudApi.getPublicizeType"
        :list-request="fraudApi.getPublicizeList"
        type="publicize"
      />
    </van-tab>
    <van-tab title="案例">
      <Propaganda
        :type-request="fraudApi.getCaseTypeType"
        :list-request="fraudApi.getCaseList"
        type="case"
      />
    </van-tab>
  </van-tabs>
</template>

<style lang="less" scoped>
.propaganda {
}
</style>
