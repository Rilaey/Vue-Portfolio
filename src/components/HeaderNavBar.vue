<template>
  <header class="flex justify-between items-center navbar">
    <div>
      <h1 class="m-3 text-white header-logo">{{ name }}</h1>
    </div>
    <div className="menu dropdown dropdown-bottom dropdown-end">
      <label tabIndex="{0}" className="btn m-1 text-white">Menu</label>
      <ul
        tabIndex="{0}"
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
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
import { CoHamburgerMenu } from "oh-vue-icons/icons";

defineProps({
  name: String
});

const downloadPDF = () => {
  const fileName = "Rileys-Resume.pdf";
  const fileURL = "./Rileys-Resume.pdf"; // Relative path to the PDF file in the public folder

  const link = document.createElement("a");
  link.href = fileURL;
  link.download = fileName;

  link.dispatchEvent(new MouseEvent("click"));
};

const menuIcon = ref(CoHamburgerMenu)
</script>

<style>
header {
  background: rgba(2, 24, 43, 1);
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
