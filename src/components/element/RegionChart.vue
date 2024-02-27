<script setup lang="ts">
import { ref, onMounted, reactive, toRefs } from 'vue';
import StackedBarChart from '../barChart/StackedBarChart.vue';
const disxtTxt = '基隆市';
</script>

<template lang="">
  <div class="mb-4 flex items-center pr-2">
    <p class="block pr-12 text-base">{{ disxtTxt }}</p>
    <StackedBarChart class="" />
  </div>
</template>
