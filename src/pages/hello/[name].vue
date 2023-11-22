<route lang="yaml">
meta:
  layout: home
</route>

<script setup lang='ts'>
const props = defineProps<{
  name: string
}>()

const router = useRouter()
</script>

<template>
  <div>
    <section>
      <i i-custom-hand inline-block p-10 />
    </section>
    <section color-coolgray-4 dark:color-white>
      Hi, <span color-green> {{ props.name }} </span>
    </section>
    <section>
      <button btn bg-coolgray-400 color-white @click="() => router.back()">
        BACK
      </button>
    </section>
  </div>
</template>

<style scoped>

</style>
