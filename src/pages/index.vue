<script setup lang='ts'>
const router = useRouter()

const name = ref('')

function go(name: string) {
  router.push(`/hello/${name}`)
}
</script>

<template>
  <div leading-loose space-y-6>
    <section>
      <div>
        <i i-carbon-chart-bubble-packed inline-block size-12 />
      </div>
      <div text="orange xl">
        Carapace
      </div>
      <div text-coolgray-400 font-italic>
        Start Template For
        <span color="green">
          Vue 2.7
        </span>
      </div>
    </section>
    <section>
      <input
        v-model="name"
        type="text"
        placeholder="What's your name?"
        rounded-2 bg-slate-1 text-center dark:bg-dark
        outline="none active:none"
        @keydown.enter="go(name)"
      >
    </section>
    <button :disabled="!name" rounded-full btn color-white bg-orange @click="go(name)">
      GO
    </button>
  </div>
</template>
