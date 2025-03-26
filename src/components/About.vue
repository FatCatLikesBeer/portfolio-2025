<script setup lang="ts">
import { ref } from "vue";
const toggle = ref(false);
const me = {
  name: "Billy Pamanian",
  email: "aXRpc2JpbGx5QGdtYWlsLmNvbQ==",
  location: "Los Angeles",
  about: [
    "Twelve years in the cannabis industry. Built and retrofitted buildings for commercial compliance, now building and maintaining automated hydroponic systems. Did a bit of low voltage installation in between.",
    "Self taught Python, learned shell and the terminal along the way. During peak pandemic, took a Coursera course on IT Automation with Python. Next was another Coursera course on React. Last course was The Odin Project, most of their assignments are featured on here.",
  ],
  skills: ["Linux", "Unix", "Ubuntu", "Python/MicroPython", "Shell Scripting", "JavaScript", "TypeScript", "Git", "Docker", "Hono/Express", "NodeJS/Deno", "Expo/React Native", "React", "Vue", "SQL", "MongoDB", "VIM btw"],
}
function revealer(bin: string): string {
  return atob(bin);
}
function toggleToggle() {
  toggle.value = !toggle.value;
}
</script>

<template>
  <div id="about" class="flex flex-row bg-gray-200 dark:bg-gray-700 rounded-2xl gap-8">
    <div class="flex-1/2 flex flex-col justify-between">
      <div>
        <h1 class="font-bold text-lg">{{ me.name }}</h1>
        <p class="text-xs text-gray-500 dark:text-gray-400">{{ me.location }}</p>
        <p v-if="!toggle" @click="toggleToggle" class="text-xs text-gray-500 dark:text-gray-400">
          Click to reveal email
        </p>
        <p v-else class="text-xs">{{ revealer(me.email) }}</p>
      </div>
      <div class="mt-4">
        <p class="text-sm font-bold">Skills:</p>
        <p class="text-sm"><span class="font-bold"></span> {{ me.skills.join(", ") }}.</p>
      </div>
    </div>
    <div class="flex-1/2 pr-2">
      <p class="font-bold">About: </p>
      <p class="text-sm" v-for="elem in me.about">{{ elem }}</p>
    </div>
  </div>
</template>

<style>
#about {
  margin: 24px 24px 0;
  padding: 16px;
}
</style>
