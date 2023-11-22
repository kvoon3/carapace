<script setup lang='ts'>
import { toggleDark } from '~/utils/theme'
</script>

<template>
  <div>
    <RouterView />
    <button @click="toggleDark()">
      <a i-carbon-sun dark="i-carbon-moon color-coolgray-500" inline-block bg-orange p-3 />
    </button>
    <div color-coolgray-300>
      [home layout]
    </div>
  </div>
</template>

<style scoped>

</style>
