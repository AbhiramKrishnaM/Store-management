<script setup>
import Login from "../components/section/login/index.vue";
import Modal from "../components/core/Modal.vue";
</script>

<template>
  <div>
    <Modal>
      <template v-slot:default>
        <Login />
      </template>
    </Modal>
  </div>
</template>
