<script lang="ts" setup>
import type { Publicize } from '@/api/fraud/fraud'

interface PropsType {
  item: Publicize
  type: string
}
defineOptions({
  name: 'PropagandaCard',
})
const props = defineProps<PropsType>()
const router = useRouter()

function onPostClick() {
  router.push({
    path: `/post/${props.type}/${props.item.id}`,
  })
}
</script>

<template>
  <div
    class="van-hairline--bottom propaganda-card flex-y-center justify-between bg-white px-3 py-3"
    @click="onPostClick"
  >
    <div class="mr-2 flex-grow">
      <div class="py-3">{{ item.title }}</div>
      <div class="opacity-50">
        <span>{{ item.updateTime }}</span>
      </div>
    </div>

    <div class="h-56px w-100px">
      <van-image height="100%" width="100%" :src="item.image?.url" :alt="item.title" />
    </div>
  </div>
</template>
