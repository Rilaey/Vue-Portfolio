<template>
  <div class="flex flex-col items-center justify-center">
    <HeaderNavBar />
    <AboutArea firstName="Riley" lastName="Newhart" />
    <ProjectArea />
    <ContactArea />
  </div>
</template>

<script setup>
import HeaderNavBar from "./components/HeaderNavBar.vue";
import AboutArea from "./components/AboutArea.vue";
import ProjectArea from "./components/ProjectArea.vue";
import ContactArea from "./components/ContactArea.vue";
</script>
