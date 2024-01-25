<script setup lang="ts">
import { ref } from 'vue';

const meunIsActive = ref<boolean>(false);
function activeMenu() {
  if (meunIsActive.value === true) {
    meunIsActive.value = false;
  } else {
    meunIsActive.value = true;
  }
}
</script>

<template>
  <header
    class="fixed top-0 z-50 z-50 flex h-[55px] w-screen justify-between border-b-[3px] border-solid border-b-grayScale-black bg-grayScale-white px-4 py-2 after:absolute after:bottom-0 after:z-[-1] after:h-full after:w-screen after:bg-primary-600 after:duration-200 after:ease-in md:h-20 md:p-4 md:after:hidden"
    :class="{
      ' after:left-0': meunIsActive,
      ' after:left-full': !meunIsActive,
    }"
  >
    <h1 class="logo flex w-[70%] items-center md:w-[60%]">
      <a href=""
        ><img
          src="../../assets/images/header/logo-origin.svg"
          class="md:block"
          alt=""
          :class="{ hidden: meunIsActive }"
      /></a>
      <a href=""
        ><img
          src="../../assets/images/header/logo-highlight.svg"
          alt=""
          class="md:hidden"
          :class="{ hidden: !meunIsActive }"
      /></a>
    </h1>
    <div class="navContainer flex align-middle">
      <div id="hamburger" @click="activeMenu" class="flex cursor-pointer items-center md:hidden">
        <span
          class="relative block h-1 w-8 bg-grayScale-black before:absolute before:top-[-10px] before:block before:h-1 before:w-8 before:bg-grayScale-black before:duration-200 before:ease-in after:absolute after:top-[10px] after:block after:h-1 after:w-8 after:bg-grayScale-black after:duration-200 after:ease-in"
          :class="{
            'bg-transparent before:translate-y-[10px] before:rotate-45 after:translate-y-[-10px] after:rotate-[-45deg]':
              meunIsActive,
          }"
        ></span>
      </div>
      <nav
        class="menu fixed right-0 top-[55px] h-screen w-screen bg-primary-600 duration-200 ease-in after:absolute after:bottom-0 after:border-b-0 after:border-l-[165vw] after:border-r-0 after:border-t-[45vh] after:border-solid after:border-y-transparent after:border-l-grayScale-pale after:border-r-transparent after:duration-200 after:ease-in md:static md:h-full md:w-full md:translate-x-0 md:bg-grayScale-white md:after:hidden"
        :class="{
          'translate-x-0': meunIsActive,
          'translate-x-full': !meunIsActive,
        }"
      >
        <ul class="first-letter: absolute top-[20%] w-full pr-5 md:static md:top-0 md:flex md:h-full md:justify-end">
          <li class="flex justify-end md:mx-2 md:my-[auto]">
            <a
              class="mb-4 cursor-pointer text-right text-2xl font-bold text-grayScale-white md:mb-0 md:text-lg md:text-grayScale-black md:duration-100 md:ease-in md:hover:text-primary-600"
              href=""
              >首頁</a
            >
          </li>
          <li class="flex justify-end md:mx-2 md:my-[auto]">
            <a
              class="mb-4 cursor-pointer text-right text-2xl font-bold text-grayScale-white md:mb-0 md:text-lg md:text-grayScale-black md:duration-100 md:ease-in md:hover:text-primary-600"
              href=""
              >開票地圖</a
            >
          </li>
          <li class="flex justify-end md:mx-2 md:my-[auto]">
            <a
              class="mb-4 cursor-pointer text-right text-2xl font-bold text-grayScale-white md:mb-0 md:text-lg md:text-grayScale-black md:duration-100 md:ease-in md:hover:text-primary-600"
              href=""
              >候選人政見</a
            >
          </li>
        </ul>
      </nav>
      <div
        class="imgContainer pointer-events-none absolute left-0 top-[55px] h-screen w-screen duration-200 ease-in md:hidden"
        :class="{
          'translate-x-[-120%]': !meunIsActive,
          'translate-x-0': meunIsActive,
        }"
      >
        <img
          class="navDecoImg absolute bottom-[55px] left-[-90%] w-[195%] max-w-none"
          style=""
          src="../../assets/images/header/president-house.png"
          alt=""
        />
      </div>
    </div>
  </header>
</template>

<style></style>
