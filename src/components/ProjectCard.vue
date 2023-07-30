<template>
  <div
    v-for="item in items"
    :key="item.id"
    class="flex flex-col items-center m-5 p-10 project-card"
  >
    <img :src="item.image" :alt="item.altText" class="project-img" />
    <h3 class="text-white m-2 text-xl">{{ item.title }}</h3>
    <p class="text-white m-2">{{ item.description }}</p>
    <a class="text-white m-2" :href="item.github">View Github Repo</a>
    <a class="text-white m-2" :href="item.application">Live Application</a>
    <p class="text-white m-2">Built with: {{ item.tools }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["items"]);
</script>

<style>
.project-card {
  background-color: rgba(215, 38, 61, 0.4);
  filter: saturate(70%);
  border-radius: 100px;
  width: 40%;
}

.project-img {
  max-width: 100%;
  height: 20vh;
  border-radius: 50px;
}
</style>
