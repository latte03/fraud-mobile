<script lang="ts" setup>
import type { Publicize } from '@/api/fraud/fraud'

interface PropsType {
  item: Publicize
}
defineOptions({
  name: 'PropagandaCard',
})
defineProps<PropsType>()
</script>

<template>
  <div
    class="van-hairline--bottom propaganda-card flex-y-center justify-between bg-white px-3 py-3"
  >
    <div class="mr-2 flex-grow">
      <div class="py-3">{{ item.title }}</div>
      <div class="opacity-50">
        <span>{{ item.updateTime }}</span>
      </div>
    </div>

    <div class="h-56px w-100px">
      <img :src="item.image?.url" :alt="item.title" />
    </div>
  </div>
</template>
