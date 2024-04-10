<script setup lang="ts">
import { toggleDark } from '~/utils/theme'
</script>

<template>
  <div flex items-center justify-center space-x-2>
    <button size-6 i-carbon-sun bg-orange dark="color-indigo i-carbon-moon color-coolgray-500 size-6 " @click="toggleDark()" />
    <a flex items-center href="https://github.com/kwongliegaai/carapace">
      <button size-6 i-carbon-logo-github color-coolgray-500 dark:color-coolgray-500 />
    </a>
  </div>
</template>
