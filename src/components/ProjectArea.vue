<template>
  <div>
    <div>
      <h2>What I've Been Working On</h2>
    </div>
    <div v-if="isLoading">
      <!-- Show loading state while data is being fetched -->
      Loading...
    </div>
    <div v-else>
      <!-- Pass the loadedData to the ChildComponent as a prop -->
      <ProjectCard :items="loadedData" />
    </div>
  </div>
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
