<template>
  <section
    class="flex flex-col items-center p-20 project-section"
    id="projects"
  >
    <div>
      <h2 class="text-white text-3xl m-5 italic project-header">
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
  background: linear-gradient(to bottom, #1B1725, #534B62);
}

.project-header {
  border-bottom: 3px solid rgba(2, 24, 43, 1);
    padding-bottom: 10px;
}

@media screen and (max-width: 700px) {
  .project-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
  }
}
</style>
