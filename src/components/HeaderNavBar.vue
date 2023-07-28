<script setup>
defineProps({
  name: String
});
</script>

<template>
  <header class="flex justify-between items-center">
    <div>
      <h1 class="m-3 text-white">{{ name }}</h1>
    </div>
    <div>
      <a class="m-3 text-white" href="/">About</a>
      <a class="m-3 text-white" href="/">Projects</a>
      <a class="m-3 text-white" href="/">Contact</a>
      <button className="btn btn-outline btn-info m-3">Resume</button>
    </div>
  </header>
</template>

<style>
header {
  background-color: #02182b;
}
</style>
