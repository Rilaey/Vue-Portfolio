<template>
  <section
    class="flex items-center w-full p-10 about-section"
    id="about"
  >
    <div class="w-6/12 m-5">
      <h2
        class="text-white m-5 mb-10 text-2xl italic animate__animated animate__bounceInLeft about-text"
      >
        Front End Developer<span
          class="text-black animate__animated animate__bounceInLeft"
          > .</span
        >
      </h2>
      <h2
        class="text-white m-5 mb-10 text-xl italic animate__animated animate__bounceInLeft about-text"
      >
        Hello, My Name Is {{ firstName }} {{ lastName
        }}<span class="text-black animate__animated animate__bounceInLeft"
          > .</span
        >
      </h2>
      <p class="text-white m-5 animate__animated animate__bounceInLeft about-text about-p">
        As an experienced full-stack web developer, I'm passionate about
        crafting robust and scalable web applications. With expertise in
        front-end and back-end development, I deliver high-quality code that
        exceeds expectations. I excel in communication and collaboration,
        contributing innovative solutions to complex problems. My ultimate goal
        is to create seamless user experiences, making a positive impact on the
        digital landscape. Let's embark on this journey together.
      </p>
      <p class="text-white italic m-5 animate__animated animate__bounceInLeft about-text about-p-small">
        I have been programming for about 2 years now with a main focus on web development. Thanks for taking a look at my portfolio!
      </p>
    </div>
    <div class="w-6/12 m-5">
      <img
        :src="data.image"
        alt="about-section-tech"
        class="rounded-lg animate__animated animate__bounceInRight"
      />
    </div>
  </section>
</template>

<script setup>
import FrontEndDevelopmentImage from "../assets/frontEndDevelopment.jpg";
import { defineProps, reactive } from "vue";
import "animate.css";

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
  background: linear-gradient(to bottom, #534b62, #1b1725);
}

.about-p-small {
  display: none;
  }

@media screen and (max-width: 920px) {
  .about-section {
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
  }

  .about-text {
    font-size: 1.5rem;
    margin: 10% 0%;
    padding: 0%;
  }
}

@media screen and (max-width: 590px) {
  .about-p {
    display: none;
  }

  .about-p-small {
    display: inline;
  }
}
</style>
