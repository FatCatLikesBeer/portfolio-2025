<script setup lang="ts">
import { ref } from "vue";
import GitHub from "./icons/GitHub.vue";
import LeftArrow from "./icons/LeftArrow.vue";
import RightArrow from "./icons/RightArrow.vue";
import ImagePositionIndicator from "./ImagePositionIndicator.vue";
import type { Project } from "../data/projects.ts";

const props = defineProps<{ project: Project }>();
const imageIndex = ref(1);

const imageLocation = `/screenshots/${props.project.id}/`;
const imageCatlog = Array.from({ length: 3 }, (_, i) => `${imageLocation}/${i + 1}.png`);

(function () {
  imageCatlog.forEach((elem) => {
    const arbitraryElement = new Image();
    arbitraryElement.src = elem;
  });
})();

function handleLeft() {
  if (imageIndex.value <= 1) {
    imageIndex.value = 3;
  } else {
    imageIndex.value = imageIndex.value - 1;
  }
}

function handleRight() {
  if (imageIndex.value >= 3) {
    imageIndex.value = 1;
  } else {
    imageIndex.value = imageIndex.value + 1;
  }
}

</script>

<template>
  <div class="border-pink-500 border-3 rounded-xl p-4 m-2">
    <div class="flex flex-row items-center">
      <LeftArrow :size="28" :callBack="handleLeft" />
      <div v-for="(elem, i) in imageCatlog" class="flex flex-row">
        <div v-if="i + 1 === imageIndex" class="justify-items-center">
          <img :src="elem" class="h-[80lvh] rounded-xl" />
        </div>
      </div>
      <RightArrow :size="28" :callBack="handleRight" />
    </div>
    <ImagePositionIndicator :location="imageIndex" />
    <h1 class="underline">{{ project.name }}</h1>
    <p class="sub-title">{{ project.description }}</p>
    <GitHub :url="project.github" :size="28" />
  </div>
</template>

<style>
.image-select {
  z-index: 9999;
  height: 20px;
}
</style>
