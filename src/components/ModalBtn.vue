<script setup lang="ts">
const props = defineProps<{
  classes: string | string[]
  text: string
  title: string
}>()

const isModalOpen = ref(false)
</script>

<template>
  <div>
    <TheModal v-model="isModalOpen" :title="title">
      <button btn-primary :class="props.classes" @click="isModalOpen = !isModalOpen">
        {{ text }}
      </button>
      <template #content>
        <slot />
      </template>
    </TheModal>
  </div>
</template>
