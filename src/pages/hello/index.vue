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
    <button btn bg-orange rounded-full @click="() => router.back()">
      BACK
    </button>
  </div>
</template>

<style scoped>

</style>
