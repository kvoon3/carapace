<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main px10 py20 text-center>
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <RouterView />
    <div>
      <button btn m="3 t8" bg-orange rounded-full color-white @click="router.back()">
        BACK
      </button>
    </div>
  </main>
</template>
