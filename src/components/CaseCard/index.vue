<script lang="ts" setup>
import { useAssetsImageURL } from '@composables/url-composable'

import { clearHTMLText } from '@/utils'

interface PropsType {
  title?: string
}
defineOptions({
  name: 'CaseCard',
})
const props = defineProps<PropsType>()
const banner = useAssetsImageURL('banner', { extension: '.png' })

const text =
  '那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。'
</script>

<template>
  <div class="case-card w-full p-3">
    <div class="case-card-title mb-2">title</div>
    <div class="case-card-content w-full">
      <div class="case-card-body mb-2 w-full flex">
        <div class="case-card-text van-multi-ellipsis--l3 mr-2 opacity-75">
          {{ clearHTMLText(text) }}
        </div>
        <div class="case-card-cover flex-shrink-0">
          <img :src="banner" alt="" srcset="" class="h-full w-full" />
        </div>
      </div>
      <div class="case-card-footer mt-2 opacity-50">
        <span class="pl-4">20202--2-2-22</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.case-card-title {
  font-size: 14px;
  font-weight: 800;
}

.case-card-cover {
  display: inline-block;
  width: 100px;
  height: 67px;

  img {
    width: 100%;
  }
}

.case-card {
  overflow: hidden;
  /* stylelint-disable-next-line scale-unlimited/declaration-strict-value */
  background-color: #fff;
  border-radius: 4px;

  & + .case-card {
    margin-top: 2px;
  }
}
</style>
