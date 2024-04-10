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
      <i i-custom-hand inline-block size-14 />
      <div>
        Hi, <span color-green> {{ props.name }} </span>
      </div>
      <div font-italic>
        Here was a dynamic route
      </div>
    </section>
    <TheCounter />
    <section>
      <button rounded-full btn bg-coolgray-400 color-white bg-orange @click="() => router.back()">
        BACK
      </button>
    </section>
  </div>
</template>

<style scoped>

</style>
