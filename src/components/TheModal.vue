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
    <div absolute inset-0 size-screen bg-black:40 backdrop-blur-sm @touchmove.prevent @scroll.prevent @wheel.prevent />
    <div
      ref="theModal"
      :readonly="false"

      flex="~ col"
      absolute position-center z-9999 w-90vw animate-fade-in animate-duration-300 sm:w-60vw bg-base-2
    >
      <div class="title" z-1000 pb-2 pt-5 text-center text-lg bg-base-2>
        {{ title }}
      </div>
      <div class="content" max-h-50 grow-1 of-scroll px-5 text-left>
        <slot name="content" />
      </div>
      <div class="actions" bg-base-2>
        <slot name="actions" />
      </div>
    </div>
  </portal>
</template>
