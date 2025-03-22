<script setup lang="ts">
import { ref } from "vue";
import type Projects from "./data/projects.ts";
defineProps<{ project: Projects[] }>();
</script>

<template>
  <div>
    <h1 class="underline">{{ project.name }}</h1>
    <p class="sub-title">{{ project.description }}</p>
  </div>
</template>

<style scoped></style>
