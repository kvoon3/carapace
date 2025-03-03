<route lang="yaml">
meta:
  layout: home
</route>

<script setup lang='ts'>
const router = useRouter()
</script>

<template>
  <div space-y-6>
    <div>Hello Index Page</div>
    <button rounded-full bg-primary btn @click="() => router.back()">
      BACK
    </button>
  </div>
</template>

<style scoped>

</style>
