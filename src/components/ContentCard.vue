<script setup lang="ts">
import GitHub from "./icons/GitHub.vue";
import type { Project } from "../data/projects.ts";
defineProps<{ project: Project }>();
</script>

<template>
  <div class="border-amber-100 border-3 rounded-xl p-4 m-2">
    <h1 class="underline">{{ project.name }}</h1>
    <p class="sub-title">{{ project.description }}</p>
    <GitHub :url="project.github" :size="28" />
  </div>
</template>
