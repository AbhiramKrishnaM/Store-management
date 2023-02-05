<template>
  <div>
    <Registration :is="current" />
    <Thanks v-show="!current" />
    <button @click="change">click</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Registration from "../components/section/Registration.vue";
import Thanks from "../components/section/Thanks.vue";

const current = ref("Registration");

const tabs = {
  Registration,

  Thanks,
};

function change() {
  current.value = false;
}
</script>
