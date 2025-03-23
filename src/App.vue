<script setup lang="ts">
import projects from "./data/projects.ts";
import ContentCard from "./components/ContentCard.vue";
</script>

<template>
  <div v-for="project in projects">
    <ContentCard :project="project" />
  </div>
</template>

<style scoped>
</style>
