<template>
      <div v-for="item in items" :key="item.id" class="flex flex-col justify-center items-center w-full">
        <img :src="item.image" :alt="item.altText" class="w-1/6" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <a :href="item.github">View Github Repo</a>
        <a :href="item.application">Live Application</a>
        <p>Built with: {{ item.tools }}</p>
      </div>
  </template>

  <script setup>
  import { defineProps } from 'vue';

  const props = defineProps(['items']);
  </script>