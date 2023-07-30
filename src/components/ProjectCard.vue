<template>
  <div class="test m-2" v-for="item in items" :key="item.id">
    <div
      class="shadow-lg group container rounded-md max-w-sm flex justify-center items-center mx-auto content-div"
    >
      <div>
        <!-- <div class="w-full rounded-t-md"> -->
        <img
          :src="item.image"
          :alt="item.altText"
          class="project-img rounded-md"
        />
        <!-- </div> -->
        <div
          class="py-8 px-4 rounded-b-md fd-cl group-hover:opacity-25 card-body"
        >
          <span class="block text-lg text-white font-bold tracking-wide">{{
            item.title
          }}</span>
          <span class="block text-white text-sm">{{ item.description }} </span>
        </div>
      </div>
      <div
        class="absolute opacity-0 fd-sh group-hover:opacity-100 flex flex-wrap flex-col items-center justify-center mt-40"
      >
        <a
          class="text-white italic tracking-wider leading-relaxed font-sans hover-text mt-2"
          :href="item.github"
          >Github Repo</a
        >
        <a
          class="text-white italic tracking-wider leading-relaxed font-sans hover-text mt-2"
          :href="item.application"
          >Live Application</a
        >
        <p class="text-white italic leading-relaxed font-sans hover-text w-2/4 mt-2">
          Built with: {{ item.tools }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["items"]);
</script>

<style>
.project-img {
  width: 100%;
  height: 280px;
  /* background-color: rgba(27, 23, 37, 1); */
  padding: 30px;
  border-radius: 50px;
}

.hover-text {
  font-size: 16px;
  font-weight: bold;
  color: white;
}

.hover-text:hover {
  color: red
}

.content-div {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgba(27, 23, 37, 0.7);
}

.test {
  /* background-color: rgba(27, 23, 37, 1); */
  border-radius: 50px 50px 10px 10px;
  height: auto;
}

.content-div:hover {
  background: rgba(2, 24, 43, 1);
  border-radius: 50px 50px 10px 10px;
}

.content-div:hover .fd-cl {
  opacity: 0.25;
}
.content-div:hover .fd-sh {
  opacity: 1;
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
    /* max-width: 50%; */
    height: auto;
    border-radius: 50px;
  }
}
</style>
