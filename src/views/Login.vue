<script setup>
import Login from "@/components/section/login/index.vue";
import CustomerCard from "../components/section/customerCard.vue";

const customerCard = {
  image: {
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoEprVQayH51WidWqyN8jnoaAczBilZFNPg0ePJFywkerljh-CwI7Jkt_sJinuS0A5qxQ&usqp=CAU",
    alt: "image description",
  },
  name: "Maren Lipzuths",
  purchase: {
    total: 20,
    amount: 1200,
  },
};
</script>

<template>
  <div>
    <Login />
    <CustomerCard v-bind="customerCard" />
  </div>
</template>
