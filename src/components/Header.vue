<script setup lang="ts">
import type { Project } from "../data/projects.ts";
defineProps<{ projects: Project[] }>();
function idToLink(id: string): string {
  return `#${id}`;
}
</script>

<template>
  <header class="bg-gray-200 dark:bg-gray-700 flex flex-row justify-between">
    <h1 class="font-bold">Billy's Portfolio</h1>
    <ul class="flex flex-row">
      <li v-for="project in projects"><a :href="idToLink(project.id)">{{ project.name }}</a></li>
    </ul>
  </header>
</template>

<style>
header {
  position: sticky;
  top: 0px;
  height: 40px;
  margin: 0 24px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  z-index: 9999;
  padding: 8px 16px;
}

li {
  margin: 0 8px;
}
</style>
