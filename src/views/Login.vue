<script setup>
import { ref } from "vue";
import Login from "../components/section/Login.vue";
import Modal from "../components/core/Modal.vue";

const openModal = ref(true);
</script>

<template>
  <div>
    <Login />
  </div>
</template>
