<template>
  <div class="shadow-2xl w-full md:11/12 lg:w-5/12 rounded-2xl">
    <div>
      <img
        :src="image.path"
        :alt="image.alt"
        class="w-56 h-56 ml-auto rounded-full"
      />
    </div>
    <div class="p-3 ml-3">
      <h4 class="font-bold text-lg mt-3 mb-3">Sales Event Calendar</h4>
      <p class="text-[#8e8e8e]">{{ text }}</p>
    </div>
    <div class="p-3 ml-3 flex flex-col md:flex-row">
      <button
        type="button"
        class="mr-3 w-full md:w-1/3 lg:w-full text-white bg-[#8A9CE2] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
      >
        Set Sales Calendar
      </button>

      <button
        type="button"
        class="text-[#8A9CE2] w-full md:w-1/3 lg:4/6 mt-2 md:mt-0 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
      >
        Discount
      </button>
    </div>
  </div>
</template>

<script setup>
// Event Calendar
const props = defineProps({
  image: Object,
  text: String,
});
</script>
