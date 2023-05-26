<script setup lang='ts'>
import { consola } from 'consola'
import { toggleDark } from '~/utils/theme'

async function test() {
  consola.info(123)
  await consola.prompt("123", {
    type: 'confirm',
  })
}

onMounted(() => {
})
</script>

<template>
  <div id="app" class="bg-red dark:bg-coolgray-300">
    <div text="center">
      <button class="i-carbon-sun dark:i-carbon-moon" @click="toggleDark()" />
    </div>
    <div>
      <button class="i-carbon-pen" @click="test" />
    </div>
    <router-view />
  </div>
</template>

<style scoped>

</style>
