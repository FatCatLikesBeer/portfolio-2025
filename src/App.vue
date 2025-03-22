<script setup lang="ts">
import projects from "./data/projects.ts";
import ContentCard from "./components/ContentCard.vue";
import type Projects from "./data/projects.ts";
</script>

<template>
  <div v-for="project in projects">
    <ContentCard :project="project" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
