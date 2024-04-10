<script setup lang="ts">
const { show, title } = defineProps<{
  show: boolean
  title: string
  trap?: boolean
}>()

const theModal = shallowRef<HTMLDivElement>()
</script>

<template>
  <portal
    v-if="show"
    to="app"
    class="modal-wrapper"
    absolute
    z-1000
  >
    <div absolute inset-0 bg-black:40 backdrop-blur-sm size-screen @touchmove.prevent @scroll.prevent @wheel.prevent />
    <div
      ref="theModal"
      :readonly="false"
      z-9999 absolute position-center
      w-90vw sm:w-60vw
      flex="~ col"
      animate-fade-in animate-duration-300 bg-base-2
    >
      <div class="title" z-1000 pb-2 pt-5 text-center text-lg bg-base-2>
        {{ title }}
      </div>
      <div class="content" grow-1 px-5 max-h-50 of-scroll text-left>
        <slot name="content" />
      </div>
      <div class="actions" bg-base-2>
        <slot name="actions" />
      </div>
    </div>
  </portal>
</template>
