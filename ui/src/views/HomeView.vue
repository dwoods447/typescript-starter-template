<script setup lang="ts">
import { ref } from "vue";
import api from "../../utils/api";

let msg = ref(null);

async function getServerMessage() {
  const { message } = (await api.get("/test")).data;
  msg.value = message;
  console.log(`message returned from server ${msg.value}`);
  return msg.value;
}
</script>

<template>
  <main>
    This is HomeView
    <a href="javascript:void(0)" @click="getServerMessage"
      >Send Server Request</a
    >
  </main>
</template>
