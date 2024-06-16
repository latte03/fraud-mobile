<script lang="ts" setup>
import type { Publicize } from '@/api/fraud/fraud'
import { useAssetsImageURL } from '@/composables/url-composable'

interface PropsType {
  item: Publicize
}
defineOptions({
  name: 'PropagandaCard',
})
const props = defineProps<PropsType>()

const banner = useAssetsImageURL('banner', { extension: '.png' })
</script>

<template>
  <div class="PropagandaCard van-hairline--bottom flex-y-center justify-between px-3 py-3">
    <div class="mr-2 flex-grow">
      <div class="py-3">{{ item.title }}</div>
      <div flex>
        <div class="tag pr-1">
          <SvgIcon name="a-top" style="width: 24px; height: 24px; color: blue" />
        </div>
        <div class="opacity-50">
          <span class="pl-4">{{ item.updateTime }}</span>
        </div>
      </div>
    </div>

    <div class="h-56px w-100px">
      <img :src="banner" :alt="item.title" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.PropagandaCard {
}
</style>
