<template>
  <section class="flex flex-col items-center justify-center">
    <div>
      <h2 class="italic text-white m-5 mt-10 text-3xl contact-header">
        Have Any Questions?
      </h2>
    </div>
    <form ref="form" @submit.prevent="sendEmail" class="max-w-md mx-auto mt-8">
      <div class="mb-4">
        <label for="name" class="block text-white italic font-semibold mb-2"
          >Name</label
        >
        <input
        v-model="formData.user_name"
          type="text"
          name="user_name"
          class="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-white italic font-semibold mb-2"
          >Email</label
        >
        <input
        v-model="formData.user_email"
          type="email"
          name="user_email"
          class="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block text-white italic font-semibold mb-2"
          >Message</label
        >
        <textarea
        v-model="formData.message"
          name="message"
          rows="4"
          class="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
          required
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          value="Send"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const form = ref(null);

const formData = ref({
  user_name: '',
  user_email: '',
  message: ''
});

const sendEmail = () => {
  emailjs
    .sendForm(
      "service_dw40vid",
      "template_rpbdm2h",
      form.value,
      "tcvghC_602qwzMEG2"
    )
    .then((result) => {
      formData.value.user_name = '';
      formData.value.user_email = '';
      formData.value.message = '';
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.log("FAILED...", error.text);
    });
};
</script>

<style>
.contact-header {
  border-bottom: 3px solid rgba(2, 24, 43, 1);
  padding-bottom: 10px;
}
</style>
