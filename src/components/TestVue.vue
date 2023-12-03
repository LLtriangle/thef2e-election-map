<template>
    <div>
        <input v-model="count" />
        <p :class="color">{{ count }}</p>
        <p>{{ color }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
const color = ref("skyblue");
</script>

<style>
.skyblue {
    color: skyblue;
}
</style>
