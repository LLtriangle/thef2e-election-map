<script setup lang="ts">
const props = defineProps(['footerGoMap']);
</script>

<template>
  <footer
    class="bg-grayScale-black text-grayScale-white relative bottom-0 z-40 w-full px-8 py-3 md:flex md:justify-between"
  >
    <a
      class="goToPoll group mb-4 flex items-center text-base md:mb-0 md:w-[80%] md:max-w-[300px] md:text-xl"
      :class="{
        block: footerGoMap,
        hidden: !footerGoMap,
      }"
      href=""
    >
      <span class="mr-2 block">看選前民調</span>
      <span
        class="after:translzte-x-2 relative mb-1 mt-4 block w-[100px] border-b-[2px] border-b-primary-600 transition-all after:absolute after:bottom-[3px] after:right-[-1px] after:w-[20px] after:rotate-[30deg] after:border-b-[2px] after:border-b-primary-600 group-hover:w-[130px] group-hover:translate-x-2 group-hover:translate-y-[-6px] group-hover:border-b-[1px] after:group-hover:w-[15px] after:group-hover:border-b-[1px] min-[280px]:group-hover:w-[120px] sm:w-[150px] sm:after:bottom-[6px] sm:after:w-[30px] sm:group-hover:w-[180px] sm:after:group-hover:bottom-[4px] sm:after:group-hover:w-[20px] md:mt-5"
      />
    </a>
    <div class="credit min-[860px]:flex">
      <a class="contact mb-2 block text-xs sm:mr-7 md:my-auto md:text-base" href="">樹懶設計 shulian@gmail.com</a>
      <div class="copyright text-xs md:my-auto md:text-base">© 2023 樹懶設計 shulian 版權所有</div>
    </div>
  </footer>
</template>

<style></style>
