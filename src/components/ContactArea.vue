<template>
  <section class="contact-section flex justify-evenly h-screen items-center">
    <div>
      <ContactForm />
    </div>
    <div class="flex flex-col justify-center items-center">
      <div>
        <h2 class="italic text-white m-10 text-3xl">Connect With Me.</h2>
      </div>
      <div class="flex">
        <a href="https://www.linkedin.com/in/riley-newhart-667b43128/"><img :src="linkedInImage" alt="linkedin logo" class="social-img" /></a>
        <a href="https://github.com/Rilaey"><img :src="twitterImage" alt="twitter logo" class="social-img twitter-logo" /></a>
        <a href="https://twitter.com/codingWithRiley"><img :src="githubImage" alt="github logo" class="social-img" /></a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import LinkedinLogo from "../assets/linkedin.png";
import TwitterLogo from "../assets/twitter-logo.png";
import GithubLogo from "../assets/github-mark.png";
import ContactForm from "./ContactForm.vue";

const linkedInImage = ref(LinkedinLogo);
const twitterImage = ref(TwitterLogo);
const githubImage = ref(GithubLogo);
</script>

<style>
.social-img {
  max-width: 100%;
  height: 20vh;
  margin: 10px;
}

.twitter-logo {
  opacity: 0.7;
}

.contact-section {
  background: linear-gradient(to bottom, #d7263d, #307351);
}
</style>
