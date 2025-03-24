<script setup lang="ts">
import projects from "./data/projects.ts";
import ContentCard from "./components/ContentCard.vue";
const flipped = projects.toReversed();
</script>

<template>
  <div v-for="project in flipped">
    <ContentCard :project="project" />
  </div>
</template>
