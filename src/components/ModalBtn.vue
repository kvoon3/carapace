<script setup lang="ts">
const props = defineProps<{
  classes: string | string[]
  text: string
  title: string
}>()

const isShow = ref(false)
</script>

<template>
  <div>
    <button btn :class="props.classes" @click="isShow = !isShow">
      {{ text }}
    </button>
    <TheModal :show="isShow" :title="title">
      <template #content>
        <slot />
      </template>
      <template #actions>
        <section>
          <button btn color-orange @click="isShow = false">
            Close
          </button>
        </section>
      </template>
    </TheModal>
  </div>
</template>
