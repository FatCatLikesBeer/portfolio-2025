<script setup lang="ts">
const props = defineProps<{ url: string; size: number }>();

function handleClick() {
  window.open(props.url, "_blank");
}
</script>

<template>
  <div v-if="url != ''">
    <svg mlns="http://www.w3.org/2000/svg" :height="size" :width="size" fill="currentColor"
      class="bi bi-github cursor-pointer" viewBox="0 0 16 16" @click="handleClick()">
      <path
        d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
      <path
        d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1M2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1z" />
    </svg>
    <!-- https://icons.getbootstrap.com/icons/github/ -->
  </div>
</template>
