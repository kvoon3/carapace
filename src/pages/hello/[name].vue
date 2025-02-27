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
  <div space-y-6>
    <section>
      <i i-custom-hand inline-block size-12 />
      <div text-xl>
        Hi, <span color-green> {{ props.name }} </span>
      </div>
      <div text-neutral-400 font-italic>
        Here was a dynamic route
      </div>
    </section>
    <TheCounter />
    <button rounded-full bg-neutral-400 bg-orange color-white btn @click="() => router.back()">
      BACK
    </button>
  </div>
</template>

<style scoped>

</style>
