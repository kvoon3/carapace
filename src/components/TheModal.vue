<script setup lang="ts">
import { onClickOutside, templateRef } from '@vueuse/core'

defineProps<{
  title: string
  trap?: boolean
}>()

const { value: open } = defineModels<{
  value: boolean
}>()

const theModal = templateRef<HTMLDivElement>('theModal')

onClickOutside(theModal, () => {
  open.value = false
})
</script>

<template>
  <div>
    <div inline-block @click="() => open = true">
      <slot />
    </div>

    <portal
      v-if="open"
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
        absolute position-center z-9999 w-90vw animate-fade-in animate-duration-300 of-hidden rounded md:max-w-160 bg-secondary
      >
        <header z-1000 text-center text-lg>
          <slot name="header">
            <div>
              {{ title }}
            </div>
          </slot>
          <button i-carbon-close-outline absolute right-2 top-2 inline-block color-neutral-400 hover:op75 @click="open = false" />
        </header>
        <content max-h-50 grow-1 of-scroll px-5 text-left>
          <slot name="content" />
        </content>
        <footer>
          <slot name="footer">
            <section>
              <button color-orange btn @click="open = false">
                Close
              </button>
            </section>
          </slot>
        </footer>
      </div>
    </portal>
  </div>
</template>

<style scoped>
header,
content,
footer {
  --at-apply: py2;
}
</style>
