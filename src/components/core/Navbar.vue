<script setup>
import { useMain } from "@/stores/main.js";

const main = useMain();
</script>

<template>
  <div class="h-full flex flex-col items-center pt-20">
    <Icon
      icon="carbon:accessibility-color-filled"
      :width="37"
      :height="37"
      class="text-red-500"
    />
  </div>
</template>
