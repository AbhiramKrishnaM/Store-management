<script setup>
import { useMain } from "@/stores/main.js";

const main = useMain();
</script>

<template>
  <div
    class="py-10 lg:py-20 lg:h-full flex flex-col items-center justify-between bg-red-600 lg:bg-transparent"
  >
    <ul class="hidden lg:flex flex-col items-center gap-12">
      <li v-for="link in main.links" :key="link.id">
        <router-link
          :to="link.to"
          class="p-2 text-icon-one hover:text-primary transition-colors relative block after-content-[''] after:w-0 after:bg-primary hover:after:w-1/3 [&.active-link]:after:w-1/3 after:absolute after:top-full after:h-[3px] after:left-1/2 after:translate-x-[-50%] after:transition-all"
        >
          <Icon
            :icon="link.icon"
            :width="27"
            :height="27"
            class="text-inherit hover:drop-shadow-xl"
          />
        </router-link>
      </li>
    </ul>
    <router-link
      to="/login"
      class="text-icon-one hover:text-primary transition-colors relative after-content-[''] after:w-0 after:bg-primary hover:after:w-1/3 [&.active-link]:after:w-1/3 after:absolute after:top-full after:h-[3px] after:left-1/2 after:translate-x-[-50%] after:transition-all"
    >
      <button>
        <Icon :icon="main.logout.icon" :width="27" :height="27" class="" />
      </button>
    </router-link>
  </div>
</template>
