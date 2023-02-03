<script setup>
// User avatar
const props = defineProps({
  image: Object,
  username: String,
  address: String,
  product: Object,
  customer: Object,
});
</script>

<template>
  <div class="ml-10 w-56 text-center">
    <img :src="image.path" :alt="image.alt" class="w-32 mx-auto mb-3" />
    <div class="text-red-700 font-bold">{{ username }}</div>
    <div class="mb-6">{{ address }}</div>
    <div class="flex">
      <div class="mr-10">
        <p class="font-bold text-lg">{{ product.quantity }}</p>
        <p>PRODUCTS</p>
      </div>
      <div>
        <p class="font-bold text-lg">{{ customer.count }}k</p>
        <p>CUSTOMERS</p>
      </div>
    </div>
  </div>
</template>
