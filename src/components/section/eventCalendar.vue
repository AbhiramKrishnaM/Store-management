<template>
  <div class="shadow-2xl w-96 h-[560px] rounded-2xl">
    <div>
      <img
        :src="image.path"
        :alt="image.alt"
        class="w-56 h-72 ml-auto rounded-[50px]"
      />
    </div>
    <div class="p-3 ml-3">
      <h4 class="font-bold text-lg mt-3 mb-3">Sales Event Calendar</h4>
      <p class="text-[#8e8e8e]">{{ text }}</p>
    </div>
    <div class="p-3 ml-3 flex flex-wrap">
      <button
        type="button"
        class="mr-3 text-white bg-[#8A9CE2] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
      >
        Set Sales Calendar
      </button>

      <button
        type="button"
        class="text-[#8A9CE2] border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Discount
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: Object,
  text: String,
});
</script>
