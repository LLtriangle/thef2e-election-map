<script setup lang="ts">
import { ref, onMounted, reactive, toRefs } from 'vue';
import indexData from '../../data/indexData.json';

const { candidate } = indexData.components.IndexVote;
const { goMapLinks } = indexData.components.IndexVote;
console.log(candidate);
console.log(goMapLinks);

const { bureauImg } = toRefs(reactive({ bureauImg: null }));
const bureauImgMaskWidth = ref(0);
const bureauImgMaskHeight = ref(0);

const calculateBureauImgSize = () => {
  const bureauImgElement = bureauImg.value;

  if (bureauImgElement) {
    bureauImgMaskWidth.value = bureauImgElement.width;
    bureauImgMaskHeight.value = bureauImgElement.height;
  }
};

onMounted(() => {
  calculateBureauImgSize();
  window.addEventListener('resize', calculateBureauImgSize);
});
</script>

<template lang="">
  <section class="indexVote flex">
    <div
      class="voteContainer relative mx-auto h-[320px] w-[350px] border-x-2 border-b-2 border-grayScale-black max-[320px]:w-[250px] md:mr-[5%] md:mt-5 md:border-t-2"
    >
      <div class="bureauContainer">
        <div
          class="circleBg absolute left-[15%] top-[10%] h-[120px] w-[240px] rounded-t-[140px] bg-grayScale-stone max-[320px]:w-[160px]"
        />
        <div class="bureauImgContainer relative mt-[50px]">
          <img class="bureauBg" src="../../assets/images/index/bureauBg.png" />
          <img
            ref="bureauImg"
            class="bureauImg absolute left-[1%] top-[-3%] opacity-75 max-[320px]:left-[-1%] max-[320px]:scale-90"
            src="../../assets/images/index/bureau.png"
          />
          <div
            class="bureauMask absolute left-[1%] top-[-3%] opacity-60 max-[320px]:left-[-1%] max-[320px]:scale-90"
            :style="{
              width: `${bureauImgMaskWidth}px`,
              height: `${bureauImgMaskHeight}px`,
            }"
            style="
              mask-image: url(/src/assets/images/index/bureau.png);
              mask-size: cover;
              background: rgba(0, 0, 0, 0.5);
            "
          />
        </div>
        <div class="voteStatistic mt-8 flex">
          <p
            class="voteStatisticTsai relative ml-2 before:absolute before:left-0 before:top-[-20px] before:h-6 before:w-px before:bg-grayScale-black after:absolute after:content-['0%']"
          >
            {{ candidate[0] }}
          </p>
          <p
            class="voteStatisticHan relative ml-14 before:absolute before:left-0 before:top-[-20px] before:h-6 before:w-px before:bg-grayScale-black after:absolute after:content-['0%']"
          >
            {{ candidate[1] }}
          </p>
          <p
            class="voteStatisticSong relative ml-16 before:absolute before:left-0 before:top-[-20px] before:h-6 before:w-px before:bg-grayScale-black after:absolute after:content-['0%']"
          >
            {{ candidate[2] }}
          </p>
        </div>
      </div>
      <a
        :href="goMapLinks[0].href"
        class="absolute bottom-0 block border-r-2 border-t-2 border-grayScale-black p-1 duration-200 ease-in hover:bg-grayScale-black hover:text-grayScale-white md:px-7 md:py-2"
        >{{ goMapLinks[0].text }}</a
      >
    </div>
  </section>
</template>

<style lang="css">
.bureauMask {
  animation: calculateVoteColor 10s infinite alternate;
}

.voteStatisticHan {
  animation: calculateVoteHan 10s infinite alternate;
}

.voteStatisticSong {
  animation: calculateVoteSong 10s infinite alternate;
}

.voteStatisticTsai::after {
  animation: calculateVoteTsaiAfter 10s infinite alternate;
}

.voteStatisticHan::after {
  animation: calculateVoteHanAfter 10s infinite alternate;
}

.voteStatisticSong::after {
  animation: calculateVoteSongAfter 10s infinite alternate;
}

@keyframes calculateVoteColor {
  0% {
    background: linear-gradient(to right, #25a55c 0%, #25a55c 33%, #4a8fe7 33%, #4a8fe7 66%, #f88545 66%, #f88545 100%);
  }

  50% {
    background: linear-gradient(to right, #25a55c 0%, #25a55c 47%, #4a8fe7 47%, #4a8fe7 80%, #f88545 80%, #f88545 100%);
  }

  100% {
    background: linear-gradient(to right, #25a55c 0%, #25a55c 57%, #4a8fe7 57%, #4a8fe7 88%, #f88545 88%, #f88545 100%);
  }
}

@keyframes calculateVoteHan {
  50% {
    margin-left: 30%;
  }

  100% {
    margin-left: 40%;
  }
}

@keyframes calculateVoteSong {
  50% {
    margin-left: 18%;
  }
  100% {
    margin-left: 15%;
  }
}
@keyframes calculateVoteTsaiAfter {
  50% {
    content: '36.7%';
  }

  100% {
    content: '57.1%';
  }
}

@keyframes calculateVoteHanAfter {
  50% {
    content: '38%';
  }

  100% {
    content: '38.6%';
  }
}

@keyframes calculateVoteSongAfter {
  50% {
    content: '5%';
    opacity: 1;
    visibility: visible;
  }
  65%,
  100% {
    width: 0px;
    height: 0px;
    content: '';
    opacity: 0;
    visibility: hidden;
  }
}
</style>
