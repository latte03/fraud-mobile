<script lang="ts" setup>
import { useAssetsImageURL } from '@composables/url-composable'

import { sha } from '~build/git'

definePage({
  name: 'IndexPage',
  path: '/',
  meta: {
    title: '首页',
    layout: 'tab-bar-layout',
    icon: 'i-simple-icons:atlassian',
    sort: 1,
  },
})

const logo = useAssetsImageURL('logo', { extension: '.svg' })
</script>

<template>
  <div>
    sha: {{ sha }}
    <img :src="logo" alt="" class="h-10 w-10" />
  </div>
</template>
