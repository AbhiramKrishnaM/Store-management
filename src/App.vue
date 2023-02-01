<script setup>
import Navbar from "@/components/core/Navbar.vue";
</script>

<template>
  <main class="h-screen flex flex-col lg:flex-row bg-light">
    <div class="h-[100px] lg:w-1/12 lg:h-screen p-5 border-r border-gray-300">
      <Navbar />
    </div>
    <div class="h-full lg:w-11/12 p-5">
      <router-view></router-view>
    </div>
  </main>
</template>
