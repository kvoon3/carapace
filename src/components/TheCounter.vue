<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <div flex items-center justify-center>
    <button bg-orange btn i-carbon-add @click="count++" />
    <input
      v-model="count" outline-none active:outline-none
      rounded-2 bg-slate-1 text-center dark:bg-dark py1.5
    >
    <button bg-orange btn i-carbon-subtract @click="count--" />
  </div>
</template>
