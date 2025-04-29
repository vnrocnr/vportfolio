<template>
  
  <div class="flex y-[20px]  items-center justify-center gap-10 h-[206px] dark:text-white dark:bg-black ">
    
    <router-link to="/projects" class=" relative border-1 flex text-center items-center group gap-3 rounded-4xl p-2 px-10 dark:text-white dark:bg-black bg-white text-black  hover:text-white hover:cursor-pointer transition-all delay-150 ease-in-out">
      View Projects

      <span class="absolute group flex items-center justify-center h-3 w-3  top-3 left-5 border  rounded-full dark:bg-white bg-black group-hover:h-full group-hover:w-full group-hover:rounded-4xl group-hover:left-0 group-hover:top-0 transition-all delay-200 ease-in-out">

</span>
 <span class="absolute opacity-0 transition-all delay-200 group-hover:opacity-100 text-center text-white dark:text-black scale-50 group-hover:scale-100">View Projects </span>
 <span class="absolute opacity-0 transition-all delay-200 group-hover:opacity-100 right-5 dark:text-black">></span>
    </router-link>
    
    
   
    <!-- <button class="p-3 w-[220px] rounded-2xl bg-black text-white">View Projects</button> -->
    <!-- <img :src="MyFace" alt="my grad pic" class="h-30 rounded-[50%]" />

    <div class="description flex flex-col gap-3">
      <h2 class="text-2xl font-bold">About Me</h2>
      <p class="text-[16px] md:text-md max-w-[450px]">
        Frontend Developer Bootcamp Graduate focusing on js and Vue.js. With experience of integrating REST APIs and websockets.
      </p>

      <div class="socials">
        <ul class="flex gap-2 items-center">
          <li class="hover:cursor-pointer">
            <a href="https://www.linkedin.com/in/venarocenar/">
                 <img :src="linkedln" alt="linkedln icon" />
            </a>
           
          </li>
          <li class="hover:cursor-pointer">
            <a href="https://web.facebook.com/venar.ocenar/"> 
                 <img :src="facebook" alt="facebook icon" />
            </a>
           
          </li>
          <li class="hover:cursor-pointer">
            <a href="https://github.com/vnrocnr">
              <img :src="github" alt="github icon" />
            </a>
          </li>
        </ul>
      </div>
    </div> -->

    
  </div>
</template>

<script setup>
import MyFace from '@/assets/myface.jfif'
import linkedln from '@/assets/ion_social-linkedin.svg'
import facebook from '@/assets/ic_baseline-facebook.svg'
import github from '@/assets/Vector.svg'
import gradient from '@/assets/gradient.png'

</script>
