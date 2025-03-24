<script setup lang="ts">
import projects from "./data/projects.ts";
import ContentCard from "./components/ContentCard.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
const flipped = projects.reverse();
</script>

<template>
  <Header :projects="flipped" />
  <div v-for="project in flipped">
    <ContentCard :project="project" />
  </div>
  <Footer />
</template>
