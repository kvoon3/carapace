<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <div flex items-center justify-center>
    <button i-carbon-add size-6 bg-primary btn @click="count++" />
    <input
      v-model.number="count"

      rounded-2 bg-slate-1 py1.5 text-center outline-none dark:bg-dark active:outline-none
      inputmode="numeric"
    >
    <button i-carbon-subtract size-6 bg-primary btn @click="count--" />
  </div>
</template>
