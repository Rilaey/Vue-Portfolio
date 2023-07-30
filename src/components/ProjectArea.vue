<template>
  <section
    class="flex flex-wrap flex-col justify-between items-center p-10 project-section"
  >
    <div>
      <h2 class="text-white m-5 mb-10 text-3xl italic">
        What I've Been Working On
      </h2>
    </div>
    <div v-if="isLoading">
      <!-- Show loading state while data is being fetched -->
      Loading...
    </div>
    <div v-else class="flex flex-wrap justify-center w-full">
      <!-- Pass the loadedData to the ChildComponent as a prop -->
      <ProjectCard :items="loadedData" />
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ProjectCard from "./ProjectCard.vue";

const isLoading = ref(true);
const loadedData = ref([]);

// Fetch JSON data when the component is mounted
onMounted(async () => {
  try {
    const response = await fetch("src/data/projects.json");
    loadedData.value = await response.json();
    isLoading.value = false;
  } catch (error) {
    console.error("Error fetching data:", error);
    isLoading.value = false;
  }
});
</script>

<style>
.project-section {
  background: linear-gradient(to bottom, #307351, #d7263d);
}
</style>
