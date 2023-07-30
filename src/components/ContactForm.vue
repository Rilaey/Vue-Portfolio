<template>
    <form @submit.prevent="submitForm" class="max-w-md mx-auto mt-8">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
        <input v-model="formData.name" type="text" id="name" name="name" class="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500" required>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
        <input v-model="formData.email" type="email" id="email" name="email" class="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500" required>
      </div>
      <div class="mb-4">
        <label for="message" class="block text-gray-700 font-semibold mb-2">Message</label>
        <textarea v-model="formData.message" id="message" name="message" rows="4" class="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500" required></textarea>
      </div>
      <div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
      </div>
    </form>
  </template>

  <script setup>
  const formData = {
    name: '',
    email: '',
    message: '',
  };

  const submitForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all the fields.');
      return;
    }

    // Send the form data to the server or perform any other action here
    alert('Form submitted successfully!');
    formData.name = '';
    formData.email = '';
    formData.message = '';
  };
  </script>

  <style>
  /* Optional: You can add custom styles here */
  </style>
