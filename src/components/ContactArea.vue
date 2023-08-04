<template>
  <section class="contact-section flex justify-evenly p-10 items-center w-full" id="contact">
    <div class="flex flex-col justify-center items-center">
      <div>
        <h2 class="italic text-white m-10 text-3xl contact-header">Connect With Me.</h2>
      </div>
      <div class="flex justify-evenly items-center">
        <a class="p-5" href="https://www.linkedin.com/in/riley-newhart-667b43128/"><img :src="linkedInImage" alt="linkedin logo" class="social-img" /></a>
        <a class="p-5" href="https://github.com/Rilaey"><img :src="twitterImage" alt="twitter logo" class="social-img twitter-logo" /></a>
        <a class="p-5" href="https://twitter.com/codingWithRiley"><img :src="githubImage" alt="github logo" class="social-img" /></a>
      </div>
    </div>
    <div>
      <ContactForm />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import LinkedinLogo from "../assets/In-Blue-96.png";
import TwitterLogo from "../assets/twitter1.png";
import GithubLogo from "../assets/github-mark-white.png";
import ContactForm from "./ContactForm.vue";

const linkedInImage = ref(LinkedinLogo);
const twitterImage = ref(TwitterLogo);
const githubImage = ref(GithubLogo);
</script>

<style>
.social-img {
  width: 100%;
  height: 100px;
}

.contact-section {
  background: linear-gradient(to bottom, #534B62, #1B1725);
}

@media screen and (max-width: 930px) {
  .contact-section {
    flex-direction: column;
  }
}

@media screen and (max-width: 600px) {
  .social-img {
    width: 120px;
    height: 100px;
    padding: 0%;
    margin: 0%;
  }

  .contact-section {
    padding-top: 60px;
    margin: 0px;
  }
}
</style>
