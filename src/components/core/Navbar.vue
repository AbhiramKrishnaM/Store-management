<script setup>
import { useMain } from "@/stores/main.js";

// Responsive navbar
import MobileNavbar from "@/components/core/MobileNavbar.vue";

const main = useMain();
</script>

<template>
  <div
    class="p-4 w-full lg:py-20 lg:h-full flex flex-col items-center justify-between lg:bg-transparent text-icon-one"
  >
    <ul class="hidden lg:flex flex-col items-center gap-12">
      <li v-for="link in main.links" :key="link.id">
        <router-link
          :to="link.to"
          class="p-2 hover:text-primary transition-colors relative block after-content-[''] after:scale-x-0 after:bg-primary after:w-1/3 [&.active-link]:after:scale-x-100 after:absolute after:top-full after:h-[3px] after:left-1/2 after:translate-x-[-50%] after:transition-all after:origin-left hover:after:scale-x-100 after:rounded-full"
        >
          <Icon
            :icon="link.icon"
            :width="27"
            :height="27"
            class="text-inherit"
          />
        </router-link>
      </li>
    </ul>
    <router-link to="/login" class="hover:text-primary hidden lg:block">
      <button>
        <Icon :icon="main.logout.icon" :width="27" :height="27" />
      </button>
    </router-link>

    <!-- mobile responive -->
    <MobileNavbar />
  </div>
</template>
