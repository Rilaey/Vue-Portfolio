<template>
  <div class="test m-2" v-for="item in items" :key="item.id">
    <div
      class="shadow-lg group container rounded-md max-w-sm flex flex-col justify-center items-center mx-auto content-div"
    >
      <div>
        <!-- <div class="w-full rounded-t-md"> -->
        <img
          :src="item.image"
          :alt="item.altText"
          class="project-img rounded-md"
        />
        <!-- </div> -->
        <div class="py-8 px-4 rounded-b-md fd-cl card-body">
          <span class="block text-lg text-white font-bold tracking-wide">{{
            item.title
          }}</span>
          <span class="block text-white text-sm">{{ item.description }} </span>
        </div>
      </div>
      <div class="hover-card">
        <div class="flex flex-col hover-card">
          <a
          class="text-white italic tracking-wider leading-relaxed font-sans hover-text mt-2"
          :href="item.application"
          ><button className="btn btn-primary m-3">Application</button></a>
          <a
          class="text-white italic tracking-wider leading-relaxed font-sans hover-text mt-2"
          :href="item.github"
          ><button className="btn btn-primary m-3">Github Repo</button></a>
        </div>
        <p
          class="text-white italic leading-relaxed font-sans hover-text w-2/4 m-2"
        >
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

.hover-card {
  background-color: rgba(27, 23, 37, 0.8);
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-primary:hover {
  background-color: #f5f5f5;
  color: #000;
  border: 1px solid #000;
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
