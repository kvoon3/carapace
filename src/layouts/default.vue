<script setup lang='ts'>
import { toggleDark } from '~/utils/theme'
</script>

<template>
  <div>
    <RouterView />
    <div flex items-center justify-center space-x-2>
      <button i-carbon-sun dark="i-carbon-moon color-coolgray-500" bg-orange @click="toggleDark()" />
      <a flex items-center href="https://github.com/kwongliegaai/carapace">
        <button i-carbon-logo-github color-coolgray-500 dark:color-coolgray-500 />
      </a>
    </div>
    <div color-coolgray-300>
      [default layout]
    </div>
  </div>
</template>

<style scoped>

</style>
