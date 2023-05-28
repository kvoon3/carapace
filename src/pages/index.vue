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
      <img
        mx-auto
        src="/CarbonChartBubblePacked.svg" alt=""
      >
    </section>
    <section text="coolgray-500 xl">
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
    <button btn bg-coolgray-400 color-white hover:bg-orange-500 :disabled="!name" @click="go(name)">
      GO
    </button>
  </div>
</template>

<style scoped>

</style>
