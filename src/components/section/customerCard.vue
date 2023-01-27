<template>
  <div class="flex">
    <img class="w-30 h-14 rounded-full" :src="image.path" :alt="image.alt" />
    <div>
      <div>
        <h3 class="font-bold">{{ name }}</h3>
      </div>
      <div class="text-gray-500">
        {{ purchase.total }} purchases <span>.</span> ${{ purchase.amount }}
      </div>
    </div>
    <div class="flex align-middle ml-10">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <circle cx="16" cy="8" r="2" fill="#6b7280" />
          <circle cx="16" cy="16" r="2" fill="#6b7280" />
          <circle cx="16" cy="24" r="2" fill="#6b7280" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: Object,
  name: String,
  purchase: Object,
});
</script>
