<template>
  <div :class="tailWindStyle">
    <input v-model="count" />
    <p :class="color">{{ count }}</p>
    <p>{{ color }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);
const color = ref('skyblue');
const tailWindStyle = ref('bg-gradient-to-r from-purple-500 to-pink-500');
</script>

<style>
.skyblue {
  color: skyblue;
}
</style>
