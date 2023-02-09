<template>
  <div>
    <Transition name="slide-fade">
      <component :is="Registration" v-if="current" @submit="change" />
      <component :is="Thanks" v-else />
    </Transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Registration from "../components/section/Registration.vue";
import Thanks from "../components/section/Thanks.vue";

const current = ref(true);

function change() {
  current.value = !current.value;
}
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.8s ease-in;
}
.slide-fade-leave-active {
  transition: all 0.8s ease-in;
}
.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 1;
}
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 1;
}

/* .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
} */
</style>
