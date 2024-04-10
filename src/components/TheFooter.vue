<script setup lang="ts">
import { toggleDark } from '~/utils/theme'
</script>

<template>
  <div flex items-center justify-center space-x-2>
    <RouterLink flex items-center to="/">
      <button size-6 i-carbon-chart-bubble-packed color-coolgray dark:color-coolgray-500 />
    </RouterLink>
    <RouterLink flex items-center to="/contents/intro">
      <button size-6 i-carbon-catalog color-coolgray dark:color-coolgray-500 />
    </RouterLink>
    <a flex items-center href="https://github.com/kwongliegaai/carapace">
      <button size-6 i-carbon-logo-github color-coolgray dark:color-coolgray-500 />
    </a>
    <button size-6 i-carbon-sun bg-orange dark="color-indigo i-carbon-moon color-coolgray-500 size-6 " @click="toggleDark()" />
  </div>
</template>
