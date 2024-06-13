<script setup lang="ts">
import Logo from '@/assets/logo.svg'
defineOptions({
  name: 'ProfilePage',
})
definePage({
  name: 'ProfilePage',
  meta: {
    layout: 'tab-bar-layout',
    title: '我的',
    icon: 'i-simple-icons:docsify',
    sort: 3,
  },
})
</script>

<template>
  <img class="m-auto w-xs" :src="Logo" alt="" />
  <div><TheWelcome /></div>
</template>
