<script setup lang="ts">
defineProps<{
  location: number;
  numberOfAssets: number;
}>();
</script>

<template>
  <div class="flex flex-row justify-center">
    <div v-for="position in numberOfAssets" :class="{ circle: true, selected: location === position }" />
  </div>
</template>

<style>
.circle {
  width: 4px;
  height: 4px;
  margin: 0 4px;
  border-radius: 100%;
  border: grey solid 4px;
}

.selected {
  border: white solid 4px;
}
</style>
