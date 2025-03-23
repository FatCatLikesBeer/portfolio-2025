<script setup lang="ts">
import GitHub from "./icons/GitHub.vue";
import type { Project } from "../data/projects.ts";
defineProps<{ project: Project }>();
</script>

<template>
  <div>
    <h1 class="underline">{{ project.name }}</h1>
    <p class="sub-title">{{ project.description }}</p>
    <GitHub :url="project.github" />
  </div>
</template>