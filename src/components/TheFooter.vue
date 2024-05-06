<script setup lang="ts">
import { toggleDark } from '~/logics/utils/theme'
</script>

<template>
  <div flex items-center justify-center space-x-2>
    <RouterLink flex items-center to="/">
      <button i-carbon-chart-bubble-packed size-6 color-coolgray dark:color-coolgray-500 />
    </RouterLink>
    <RouterLink flex items-center to="/contents/intro">
      <button i-carbon-catalog size-6 color-coolgray dark:color-coolgray-500 />
    </RouterLink>
    <a flex items-center href="https://github.com/kwongliegaai/carapace">
      <button i-carbon-logo-github size-6 color-coolgray dark:color-coolgray-500 />
    </a>
    <button i-carbon-sun size-6 bg-orange dark="color-indigo i-carbon-moon color-coolgray-500 size-6 " @click="toggleDark()" />
  </div>
</template>
