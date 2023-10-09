<route lang="yaml">
meta:
  layout: home
  title: video test
</route>

<script setup lang="ts">
onMounted(() => {
  const player = new window.Aliplayer({
    id: 'J_prismPlayer',
    source: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
  }, (player) => {
    console.log('The player is created.', player)
  })
})
</script>

<template>
  <div>
    <div id="J_prismPlayer" my-4 />
  </div>
</template>
