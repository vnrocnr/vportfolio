<template>
  <div
    class="flex flex-col  relative pt-10 md:h-[400px] px-10 md:px-[50px] lg:px-100 w-screen gap-5 my-[20px]"
  >

  <div
  class="absolute inset-0 -z-10 dark:bg-black dark:text-gray-50 
         dark:bg-[linear-gradient(to_right,rgba(220,220,220,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(220,220,220,0.1)_1px,transparent_1px)] 
         bg-[size:8rem_4rem]
          bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
         "
></div>



    <!-- <img :src="ribbon" alt="ribbon" class="h-[60px] absolute top-2 right-50  md:top-10 md:right-90 lg:top-13 lg:right-235"> -->
    <p class="font-bold dark:text-white !important max-w-[800px] text-[35px] items-center md:text-[48px]">
      Where logic meets instinct — I craft in code and compete in virtual worlds.
    </p>

    <div class="bottom dark:text-white flex flex-col items-center gap-10 md:flex-row justify-between">
      <div class="desc">
        <p class="max-w-[400px] md:max-w-[440px] text-center md:text-[16px]">
          Creating beautiful and functional web experiences with clean code and thoughtful design
          with <span class="font-semibold">Vue js</span> and <span class="font-semibold">Tailwind CSS.</span>
        </p>
      </div>

      <div class="buttons-container flex gap-5">
        <a :href="resume" class="relative">
          <button 
            class= " relative border-1 flex text-center items-center group gap-3 rounded-4xl p-2 px-10 dark:text-white dark:bg-black bg-white text-black  hover:text-white hover:cursor-pointer transition-all delay-150 ease-in-out "
          >
      
            View my Resume

            <span class="absolute group flex items-center justify-center h-3 w-3  top-3 left-5 border  rounded-full dark:bg-white bg-black group-hover:h-full group-hover:w-full group-hover:rounded-4xl group-hover:left-0 group-hover:top-0 transition-all delay-200 ease-in-out">

            </span>
             <span class="absolute opacity-0 transition-all delay-200 group-hover:opacity-100 text-center dark:text-black text-white scale-50 group-hover:scale-100">View Resume </span>
             <span class="absolute opacity-0 transition-all delay-200 group-hover:opacity-100 right-10 dark:text-black">></span>
          </button>

      
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ribbon from '@/assets/ribbon.png'
import call from '@/assets/call.svg'

const resume = ref<String>(
  'https://drive.google.com/file/d/16U6RIDFXZ-F2GRhKPN0bjuqvwk4NKsbl/view?usp=sharing',
)
</script>
