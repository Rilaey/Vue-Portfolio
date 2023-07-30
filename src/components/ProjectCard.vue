<template>
  <div
    v-for="item in items"
    :key="item.id"
    class="flex flex-col  m-5 p-10 project-card"
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
  background-color: rgba(27, 23, 37, 0.7);
  filter: saturate(70%);
  border-radius: 100px;
  width: 40%;
}

.project-img {
  max-width: 50%;
  height: auto;
  border-radius: 50px;
}

@media screen and (max-width: 830px) {
  .project-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 10px 0px;
    padding: 40px;
  }

  .project-img {
  max-width: 50%;
  height: auto;
  border-radius: 50px;
}
}
</style>
