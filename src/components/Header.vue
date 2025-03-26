<script setup lang="ts">
import type { Project } from "../data/projects.ts";
defineProps<{ projects: Project[] }>();

function idToLink(id: string): string {
  return `#${id}`;
}
</script>

<template>
  <header class="bg-neutral-200 dark:bg-neutral-800 flex flex-row justify-between gap-16">
    <div class="flex flex-row whitespace-nowrap">
      <h1 class="font-bold text-lg"><a href="/">Billy's Portfolio</a></h1>
    </div>
    <ul id="scroll-bar" class="flex flex-row min-w-40 overflow-x-auto whitespace-nowrap">
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
  z-index: 9990;
  padding: 8px 16px;
}

li {
  margin: 0 8px;
}
</style>
