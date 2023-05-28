<script setup lang='ts'>
const router = useRouter()

const name = ref('')

function go(name: string) {
  router.push(`/hello/${name}`)
}
</script>

<template>
  <div leading-loose>
    <section>
      <i i-carbon-chart-bubble-packed inline-block p-6 dark:color-white />
    </section>
    <section text="orange xl">
      Carapace
    </section>
    <section text="coolgray-400 md">
      start template for
      <span color="green">
        vue2.7
      </span>
    </section>
    <section>
      <input
        v-model="name"
        type="text"
        placeholder="What's your name?"
        border="~ 3" rounded-2 text-center
        ring-offset-3
      >
    </section>
    <button btn bg-coolgray-400 color-white hover:bg-orange @click="go(name)">
      GO
    </button>
  </div>
</template>

<style scoped>

</style>
