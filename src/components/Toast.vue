<script setup lang="ts">
const props = defineProps<{
  showToast: boolean;
}>();
</script>

<template>
  <Transition name="fade">
    <div v-if="showToast" id="toast"
      class="flex flex-row justify-center border-green-600 border-1 p-1 pl-2 pr-2 rounded-md">
      <p class="text-green-600 ">Email Copied!</p>
    </div>
  </Transition>
</template>

<style>
#toast {
  position: relative;
  bottom: 6px;
  z-index: 9999;
}

.fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
