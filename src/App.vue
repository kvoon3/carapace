<script setup lang='ts'>
import { toggleDark } from '~/utils/theme'
</script>

<template>
  <div id="app" class="bg-red dark:bg-coolgray-300">
    <div text="center">
      <button class="i-carbon-sun dark:i-carbon-moon" @click="toggleDark()" />
    </div>
    <router-view />
  </div>
</template>

<style scoped>

</style>
