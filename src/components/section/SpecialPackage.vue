<script setup>
// Special
const props = defineProps({
  image: Object,
  title: String,
  subtitle: String,
});
</script>
<template lang="">
  <div>
    <div class="flex bg-red-50 p-10 rounded-xl">
      <div class="mr-2">
        <h3 class="font-bold mb-3">{{ title }}</h3>
        <p>
          {{ subtitle }}
        </p>
        <button
          type="button"
          class="mt-3 rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white"
        >
          Manage Package
        </button>
      </div>
      <div>
        <img :src="image.path" :alt="image.alt" />
      </div>
    </div>
  </div>
</template>
