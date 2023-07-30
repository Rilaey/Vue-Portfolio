<template>
  <section class="flex justify-center items-center w-full p-10 h-screen about-section">
    <div class="w-6/12 m-5">
      <h2 class="text-white m-5 mb-10 text-2xl italic">
        Front End Developer<span class="text-black">.</span>
      </h2>
      <h2 class="text-white m-5 mb-10 text-xl italic">
        Hello, My Name Is {{ firstName }} {{ lastName
        }}<span class="text-black">.</span>
      </h2>
      <p class="text-white m-5">
        As an experienced full-stack web developer, I'm passionate about
        crafting robust and scalable web applications. With expertise in
        front-end and back-end development, I deliver high-quality code that
        exceeds expectations. I excel in communication and collaboration,
        contributing innovative solutions to complex problems. My ultimate goal
        is to create seamless user experiences, making a positive impact on the
        digital landscape. Let's embark on this journey together.
      </p>
    </div>
    <div class="w-6/12 m-5">
      <img :src="data.image" alt="about-section-tech" class="rounded-lg" />
    </div>
  </section>
</template>

<script setup>
import FrontEndDevelopmentImage from "../assets/frontEndDevelopment.jpg";
import { defineProps, reactive } from "vue";

// Define props using defineProps
defineProps({
  firstName: String,
  lastName: String
});

// Define reactive data
const data = reactive({
  image: FrontEndDevelopmentImage
});
</script>

<style>
.about-section {
  /* background-color: #d7263d; */
  background: linear-gradient(to bottom, #d7263d, #307351);
}
</style>
