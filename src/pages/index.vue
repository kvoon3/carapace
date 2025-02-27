<script setup lang='ts'>
const router = useRouter()

const name = ref('')

function go(name: string) {
  router.push(`/hello/${name}`)
}

async function test() {
  const res = await fetch('/v1/corp/web/login', {
    method: 'post',
  })

  const data = res.json()
  // eslint-disable-next-line no-console
  console.log('data', data)
}

test()
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
    <button :disabled="!name" rounded-full bg-orange color-white btn @click="go(name)">
      GO
    </button>
  </div>
</template>
