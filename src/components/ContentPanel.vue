<script setup lang="ts">
import type { Project } from "../data/projects.ts";
import LinkPanel from "./LinkPanel.vue";
const props = defineProps<{ project: Project }>();
const technologies = props.project.tech.join(", ");
</script>

<template>
  <div class="w-[28svw] p-4 pt-2 flex-1/4 bg-gray-200 dark:bg-gray-700 rounded-2xl flex flex-col justify-between">
    <div>
      <h1 class="text-[2rem] font-bold mb-0">{{ project.name }}</h1>
      <p class="italic mb-4">{{ project.description }}</p>
      <LinkPanel :size="28" :github="project.github" :url="project.url" />
      <article class="mt-4 mb-4 text-sm"><span class="font-bold">Goals:</span> {{ project.goals }}</article>
    </div>
    <div class="text-sm"> {{ technologies }} </div>
  </div>
</template>

<style></style>
