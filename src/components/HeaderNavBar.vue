<template>
  <header class="flex justify-between items-center navbar">
    <div>
      <h1 class="m-3 text-white header-logo hover-head-text"></h1>
    </div>
    <div className="menu dropdown dropdown-bottom dropdown-end">
      <label tabIndex="{0}" className="btn m-1 text-white menu-icon-bg" @click="toggleDropdown"></label>
      <ul
        tabIndex="{0}"
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        v-if="showDropdown"
      >
        <li>
          <a
            class="m-3 text-white cursor-pointer"
            v-scroll-to="{ element: '#about', duration: 800 }"
            >About</a
          >
        </li>
        <li>
          <a
            class="m-3 text-white cursor-pointer"
            v-scroll-to="{ element: '#projects', duration: 800 }"
            >Projects</a
          >
        </li>
        <li>
          <a
            class="m-3 text-white cursor-pointer"
            v-scroll-to="{ element: '#contact', duration: 800 }"
            >Contact</a
          >
        </li>
        <li>
          <a className="m-3 text-white cursor-pointer" @click="downloadPDF">
            Resume
          </a>
        </li>
      </ul>
    </div>
    <div class="big-menu">
      <a
        class="m-3 text-white cursor-pointer"
        v-scroll-to="{ element: '#about', duration: 800 }"
        >About</a
      >
      <a
        class="m-3 text-white cursor-pointer"
        v-scroll-to="{ element: '#projects', duration: 800 }"
        >Projects</a
      >
      <a
        class="m-3 text-white cursor-pointer"
        v-scroll-to="{ element: '#contact', duration: 800 }"
        >Contact</a
      >
      <button className="btn btn-outline btn-info m-3" @click="downloadPDF">
        Resume
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue"

defineProps({
  name: String
});

const showDropdown = ref(false);

// Toggle the dropdown visibility
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const downloadPDF = () => {
  const fileName = "Rileys-Resume.pdf";
  const fileURL = "./Rileys-Resume.pdf"; // Relative path to the PDF file in the public folder

  const link = document.createElement("a");
  link.href = fileURL;
  link.download = fileName;

  link.dispatchEvent(new MouseEvent("click"));
};
</script>

<style>
header {
  background: rgba(2, 24, 43, 1);
}

.hover-head-text::before {
  content: "R";
  opacity: 1;
  transition: opacity 0.9s ease;
}

.hover-head-text:hover::before {
  content: "Riley Newhart";
  transition: opacity 0.9s ease;
  opacity: 1;
}

.menu-icon {
  color: white;
}

.menu-icon-bg {
  background: rgba(2, 24, 43, 1);
  border: 2px solid white;
}

.header-logo {
  font-size: x-large;
  border: 2px solid white;
  padding: 10px;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
}

.menu {
  display: none;
}

@media screen and (max-width: 460px) {
  .menu {
    display: inline;
  }

  .big-menu {
    display: none;
  }
}
</style>
