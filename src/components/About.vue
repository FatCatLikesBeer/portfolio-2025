<script setup lang="ts">
import { ref } from "vue";
const showToast = ref(false);
import Toast from "./Toast.vue";
import Copy from "./icons/Copy.vue";
const toggle = ref(false);
const me = {
  name: "Billy Pamanian",
  email: "aXRpc2JpbGx5QGdtYWlsLmNvbQ==",
  location: "Los Angeles",
  about: [
    "12 years in cannabis grow operations, last 5 of those years I've worn many technical hats, from network and automations adminsitrator, sysops, and now application and hardward development. Specifically I poked holes in walls to install network infrastructure, setup and configured our environmental automations for others to use, created remote access to our automations interfaces without public exposure, and am currently working on an environmental monitoring system which includes microcontroller programming.",
    "This portfolio showcases certificates, work from The Odin Project bootcamp, and the few hobboy projects that I've built to compltion.",
  ],
  skills: ["TypeScript", "JavaScript", "Linux", "Unix", "Ubuntu", "Python/MicroPython", "C", "Git", "Docker/Docker-Compose", "Hono/Express", "NodeJS/Deno", "Expo/React Native", "React", "Vue", "SQLite", "MongoDB", "NVIM"],
}
function revealer(bin: string): string {
  return atob(bin);
}
function toggleToggle() {
  toggle.value = !toggle.value;
}
function copyToKeyboard() {
  try {
    navigator.clipboard.writeText(revealer(me.email));
    showToast.value = true;
  } catch (err: unknown) {
    console.error(err);
  } finally {
    setTimeout(() => {
      showToast.value = false;
    }, 500);
  }
}
</script>

<template>
  <div id="about" class="flex flex-row bg-neutral-200 dark:bg-neutral-800 rounded-2xl gap-8">
    <div class="flex-1/2 flex flex-col justify-between">
      <div>
        <h1 class="font-bold text-lg">{{ me.name }}</h1>
        <p class="text-xs text-neutral-500 dark:text-neutral-400">{{ me.location }}</p>
        <div>
          <p v-if="!toggle" @click="toggleToggle" class="text-xs text-neutral-500 dark:text-neutral-400">
            Click to reveal email
          </p>
          <div v-else class="text-xs flex flex-row gap-2.5">
            <p>{{ revealer(me.email) }} </p>
            <Copy :size="12" :callBack="copyToKeyboard" class="cursor-pointer" />
            <Toast :showToast="showToast" />
          </div>
        </div>
      </div>
      <div>
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
