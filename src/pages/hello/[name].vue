<script setup lang='ts'>
const props = defineProps<{
  name: string
}>()

const router = useRouter()

function back() {
  router.back()
}
</script>

<route lang="yaml">
meta:
  layout: home
</route>

<template>
  <div>
    <section>
      <i i-carbon-home />
    </section>
    <section>
      Hi, <span color-green> {{ props.name }} </span>
    </section>
    <section>
      <button btn bg-coolgray-400 color-white @click="back">
        back
      </button>
    </section>
  </div>
</template>

<style scoped>

</style>
