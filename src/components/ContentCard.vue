<script setup lang="ts">
import { ref } from "vue";
import GitHub from "./icons/GitHub.vue";
import type { Project } from "../data/projects.ts";

const props = defineProps<{ project: Project }>();
const imageIndex = ref(1);

const imageLocation = `/public/screenshots/${props.project.id}/`;
const imageCatlog = Array.from({ length: 3 }, (_, i) => `${imageLocation}/${i + 1}.png`);

(function () {
  imageCatlog.forEach((elem) => {
    const arbitraryElement = new Image();
    arbitraryElement.src = elem;
  });
})();

function handleClickImage() {
  if (imageIndex.value >= 3) {
    imageIndex.value = 1
  } else {
    imageIndex.value = imageIndex.value + 1;
  }
}

</script>

<template>
  <div class="border-amber-100 border-3 rounded-xl p-4 m-2">
    <div v-for="(elem, i) in imageCatlog">
      <div v-if="i + 1 === imageIndex" class="justify-items-center">
        <img :src="elem" @click="handleClickImage" class="h-[80lvh] rounded-xl" />
      </div>
    </div>
    <h1 class="underline">{{ project.name }}</h1>
    <p class="sub-title">{{ project.description }}</p>
    <GitHub :url="project.github" :size="28" />
  </div>
</template>
