<script setup lang="ts">
import { ref } from "vue";
import LeftArrow from "./icons/LeftArrow.vue";
import RightArrow from "./icons/RightArrow.vue";
import ImagePositionIndicator from "./ImagePositionIndicator.vue";
import ContentPanel from "./ContentPanel.vue";
import type { Project } from "../data/projects.ts";

const props = defineProps<{ project: Project }>();
const imageIndex = ref(1);

const imageLocation = `/screenshots/${props.project.id}/`;
const imageCatlog = Array.from({ length: 3 }, (_, i) => `${imageLocation}/${i + 1}.png`);

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
  <div class="p-4 m-2 h-[98svh] flex flex-row" :id="project.id">
    <ContentPanel :project="project" />
    <div class="flex-3/4">
      <div class="flex flex-col">
        <div v-for="(elem, i) in imageCatlog" class="mr-auto ml-auto">
          <div v-if="i + 1 === imageIndex">
            <img :src="elem" class="max-h-[88svh]" />
          </div>
        </div>
        <div class="flex flex-row items-center justify-center gap-8">
          <LeftArrow :size="28" :callBack="handleLeft" />
          <ImagePositionIndicator :location="imageIndex" />
          <RightArrow :size="28" :callBack="handleRight" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.image-select {
  z-index: 9999;
  height: 20px;
}
</style>
