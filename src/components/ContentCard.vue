<script setup lang="ts">
import { ref, onMounted } from "vue";
import LeftArrow from "./icons/LeftArrow.vue";
import RightArrow from "./icons/RightArrow.vue";
import ImagePositionIndicator from "./ImagePositionIndicator.vue";
import ContentPanel from "./ContentPanel.vue";
import type { Project } from "../data/projects.ts";

const props = defineProps<{ project: Project }>();
const imageIndex = ref(1);
const cardRef = ref(null);
const imageLocation = `/screenshots/${props.project.id}`;
const imageCatlog = Array.from({ length: props.project.numberOfAssets }, (_, i) => {
  return {
    imageURL: `${imageLocation}/${i + 1}.${props.project.imageFormat}`,
    linkURL: "course" === props.project.type ? `${imageLocation}/${i + 1}.pdf` : `${imageLocation}/${i + 1}.${props.project.imageFormat}`,
  }
});

function handleLeft() {
  if (imageIndex.value <= 1) {
    imageIndex.value = props.project.numberOfAssets;
  } else {
    imageIndex.value = imageIndex.value - 1;
  }
}

function handleRight() {
  if (imageIndex.value >= props.project.numberOfAssets) {
    imageIndex.value = 1;
  } else {
    imageIndex.value = imageIndex.value + 1;
  }
}

onMounted(() => {
  imageCatlog.forEach((elem) => { new Image().src = elem.imageURL });
});

</script>

<template>
  <div class="p-4 m-2 h-[92svh] flex flex-row scroll-m-12" :id="project.id" ref="cardRef">
    <ContentPanel :project="project" />
    <div class="flex-3/4">
      <div class="flex flex-col">
        <div v-for="(elem, i) in imageCatlog" class="mr-auto ml-auto">
          <div v-if="i + 1 === imageIndex">
            <div v-if="project.id === 'sound-lab'" class="mt-4" />
            <a :href="elem.linkURL" target="_blank"><img :src="elem.imageURL" class="max-h-[78svh] rounded-2xl" /></a>
            <div v-if="project.id === 'sound-lab' || project.type === 'course'" class="mb-4" />
          </div>
        </div>
        <div class="flex flex-row items-center justify-center gap-8">
          <LeftArrow :size="28" :callBack="handleLeft" />
          <ImagePositionIndicator :location="imageIndex" :numberOfAssets="project.numberOfAssets" />
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
