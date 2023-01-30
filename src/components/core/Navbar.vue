<script setup>
import { useMain } from "@/stores/main.js";

const main = useMain();
</script>

<template>
  <div
    class="py-10 lg:py-20 lg:h-full flex flex-col items-center justify-between bg-red-600"
  >
    <ul class="hidden lg:flex flex-col items-center gap-12">
      <li v-for="link in main.links" :key="link.id">
        <router-link :to="'/'">
          <Icon
            :icon="link.icon"
            :width="27"
            :height="27"
            class="text-icon-one"
          />
        </router-link>
      </li>
    </ul>

    <button>
      <Icon
        :icon="main.logout.icon"
        :width="27"
        :height="27"
        class="text-icon-one hidden lg:block"
      />
    </button>
  </div>
</template>
