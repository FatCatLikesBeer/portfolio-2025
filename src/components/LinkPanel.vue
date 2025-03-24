<script setup lang="ts">
import GitHub from "./icons/GitHub.vue";
import SiteIcon from "./icons/SiteIcon.vue";
const props = defineProps<{
  github: string;
  url: string;
  size: number;
}>();
</script>

<template>
  <div class="link-panel">
    <GitHub :url="github" :size="size" />
    <SiteIcon :url="url" :size="size" />
  </div>
</template>

<style>
.link-panel {
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  gap: 12px;
}
</style>
