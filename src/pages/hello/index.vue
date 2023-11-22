<route lang="yaml">
meta:
  layout: home
</route>

<script setup lang='ts'>
const router = useRouter()
</script>

<template>
  <div>
    <div>hello index page</div>
    <button btn bg-coolgray-400 color-white @click="() => router.back()">
      BACK
    </button>
  </div>
</template>

<style scoped>

</style>
