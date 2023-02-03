<template>
  <EventCalendar v-bind="data" />
</template>

<script setup>
import { ref } from "vue";
import EventCalendar from "@/components/section/EventCalendar.vue";

const data = {
  image: {
    path: "https://img.freepik.com/premium-vector/retro-50s-abstract-seamless-pattern-pink-yellow-orange_362366-249.jpg?w=2000",

    alt: "image",
  },

  text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur nam
        aliquid commodi! Perferendis molestiae cumque quod minima, facere`,
};
</script>
