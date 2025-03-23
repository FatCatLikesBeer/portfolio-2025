<script setup lang="ts">
const props = defineProps<{
  location: number;
}>();

</script>

<template>
  <div class="flex flex-row justify-center">
    <div :class="{ circle: true, selected: location === 1 }" />
    <div :class="{ circle: true, selected: location === 2 }" />
    <div :class="{ circle: true, selected: location === 3 }" />
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
