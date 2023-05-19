<script setup lang='ts'>
const test = ref('test')
</script>

<template>
  <div id="app">
    {{ test }}
    <router-view />
  </div>
</template>

<style scoped>

</style>
