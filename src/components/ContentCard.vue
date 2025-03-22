<script setup lang="ts">
import type { Project } from "../data/projects.ts";
defineProps<{ project: Project }>();
</script>

<template>
  <div>
    <h1 class="underline">{{ project.name }}</h1>
    <p class="sub-title">{{ project.description }}</p>
  </div>
</template>

<style scoped></style>
