<script lang="ts" setup>
import { usePagination, useRequest } from 'vue-request'

import type { fraudApi } from '@/api/fraud'

interface PropsType {
  typeRequest: typeof fraudApi.getCaseTypeType | typeof fraudApi.getPublicizeType
  listRequest: (params: any) => any
}
defineOptions({
  name: 'PropagandaList',
})
const props = defineProps<PropsType>()

const { data: typeList } = useRequest(props.typeRequest)
const {
  data: list,
  runAsync,
  loading,
  total,
} = usePagination(props.listRequest, {
  manual: true,
  pagination: {
    currentKey: 'pageNum',
    pageSizeKey: 'pageSize',
    totalKey: 'total',
  },
  initialData: [],
})

const active = ref(0)

const finished = computed(() => {
  return total.value === list.value?.length
})

watch(typeList, async () => {
  if (typeList.value) {
    await runAsync({
      pageNum: 1,
      pageSize: 10,
      typeId: typeList.value[0].id,
    })
  }
})

const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  // setTimeout(() => {
  //   for (let i = 0; i < 10; i++) {
  //     list.value.push(list.value.length + 1)
  //   }
  //   // 加载状态结束
  //   loading.value = false
  //   // 数据全部加载完成
  //   if (list.value.length >= 40) {
  //     finished.value = true
  //   }
  // }, 1000)
}
</script>

<template>
  <div class="PropagandaList">
    <van-tabs v-model:active="active">
      <van-tab v-for="type in typeList" :key="type.id" :title="type.name" />
    </van-tabs>

    <div>
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <PropagandaCard v-for="item in list" :key="item" :item="item" />
      </van-list>
    </div>
  </div>
</template>

<style lang="less" scoped>
.PropagandaList {
}
</style>
