<template>
  <header class="flex justify-between items-center">
    <div>
      <h1 class="m-3 text-white header-logo">{{ name }}</h1>
    </div>
    <div>
      <a class="m-3 text-white" href="/">About</a>
      <a class="m-3 text-white" href="/">Projects</a>
      <a class="m-3 text-white" href="/">Contact</a>
      <button className="btn btn-outline btn-info m-3">Resume</button>
    </div>
  </header>
</template>

<script setup>
defineProps({
  name: String
});
</script>

<style>
header {
  background-color: #02182b;
}

.header-logo {
  font-size: x-large;
  border: 2px solid white;
  padding: 10px;
}
</style>
