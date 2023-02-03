<script setup>
const props = defineProps({
  image: Object,
  product: Object,
});
</script>

<template>
  <div class="mt-10 ml-10 w-36">
    <div class="rounded-xl bg-red-200 p-2">
      <img :src="image.path" :alt="image.alt" class="w-32" />
    </div>
    <div class="mt-2 text-center">
      <h3>{{ product.name }}</h3>
      <p>
        <span class="font-bold">${{ product.amount }}</span>
        <span class="ml-3 text-neutral-500">
          <s>${{ product.discountedAmount }}</s></span
        >
      </p>
      <p class="text-neutral-500">{{ product.totalSold }} SOLD</p>
    </div>
  </div>
</template>
