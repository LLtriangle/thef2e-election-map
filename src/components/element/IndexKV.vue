<script setup lang="ts">
import { ref, onMounted, reactive, toRefs } from 'vue';

const { candidateKVTsai } = toRefs(reactive({ candidateKVTsai: null }));
const speechBubbleHeight = ref(0);

const calculateSpeechBubbleHeight = () => {
  const candidateKVTsaiElement = candidateKVTsai.value;

  if (candidateKVTsaiElement) {
    speechBubbleHeight.value = candidateKVTsaiElement.clientHeight;
  }
};

onMounted(() => {
  calculateSpeechBubbleHeight();
  window.addEventListener('resize', calculateSpeechBubbleHeight);
});
</script>

<template>
  <section class="indexKv overflow-x-clip overflow-y-visible">
    <div class="candidatesContainer m-auto flex h-full max-w-[1000px] md:w-[60%]">
      <div class="candidateContainer w-full">
        <div class="candidate relative h-full w-full">
          <a href="" class="group">
            <img
              class="candidateKV han absolute bottom-[5%] left-[-8%] w-[150%] max-w-[400px] group-hover:bottom-[8%] 2xl:left-[25%]"
              src="../../assets/images/index/kv-han.svg"
              alt=""
            />
            <img
              class="cta han absolute bottom-[-2%] left-[-5%] w-full max-w-[280px] drop-shadow-xl group-hover:bottom-[1%] 2xl:bottom-0 2xl:left-[30%]"
              src="../../assets/images/index/cta-han.svg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="candidateContainer w-full">
        <div class="candidate relative h-full w-full">
          <a href="" class="group">
            <img
              ref="candidateKVTsai"
              class="candidateKV tsai absolute bottom-[-3%] left-[-25%] z-30 w-[150%] max-w-[400px] group-hover:bottom-0 2xl:left-0"
              src="../../assets/images/index/kv-tsai.svg"
              alt=""
            />
            <img
              class="cta tsai absolute bottom-[350px] left-[-5%] w-full max-w-[280px] drop-shadow-xl group-hover:rotate-6 md:bottom-[350px] lg:bottom-[450px] 2xl:left-[20%]"
              src="../../assets/images/index/cta-tsai.svg"
              :style="{ bottom: `${speechBubbleHeight}px` }"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="candidateContainer w-full">
        <div class="candidate relative h-full w-full">
          <a href="" class="group">
            <img
              class="candidateKV song absolute bottom-[5%] left-[-45%] w-[160%] max-w-[420px] group-hover:rotate-[-6deg]"
              src="../../assets/images/index/kv-song.svg"
              alt=""
            />
            <img
              class="cta song absolute bottom-0 left-[20%] w-full max-w-[280px] drop-shadow-xl group-hover:bottom-[2%] group-hover:rotate-[-6deg]"
              src="../../assets/images/index/cta-song.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
