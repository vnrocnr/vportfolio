<template>
 <div class="flex flex-col w-screen md:w-screen px-10 md:px-[100px] lg:px-[400px] my-[20px] lg:grid grid-cols-6 grid-rows-4 gap-2 ">

  <div class="exp flex flex-col gap-5 p-3 rounded-xl border border-gray-300 drop-shadow-md bg-white col-span-4 row-span-4  md:h-[500px] " >
 

   

      <div class="header flex gap-2 items-center">
      <img :src="work" alt="" class="h-4 mix-blend-multiply opacity-70">
      <h3 class="text-[18px] font-semibold">Experience</h3>
    </div>
     
        <div class="containers overflow-hidden md:overflow-scroll flex flex-col gap-5 md:gap-10 md:p-5 lg:p-10">
            <div class="container flex " v-for="tl in timelineElements" :key="tl.id">
              <img :src="tl.icon" alt="">
              

              <div class="details">
                <div class="sub-con flex gap-2 md:gap-5 items-center ">
                    <p class="text-[15px] md:text-[20px] font-semibold">{{ tl.title }}</p>
                    <p class="flex gap-2 md:gap-5 text-[12px]"> <span class=" text-gray-300">• </span>  {{ tl.date }}</p>
                </div>
                <p class="text-sm">{{ tl.comp }}</p>
                <p class="text-sm italic">{{ tl.location }}</p>
              </div>
              
            </div>
        </div>
 
    
      
   
  </div>


  
  <div class="techstack rounded-md border border-gray-300  drop-shadow-md p-2  bg-white col-span-3 row-span-2 col-start-5 row-start-1 h-[250px]">
    <div class="header flex gap-2 items-center">
      <img :src="stack" alt="" class="h-4 mix-blend-multiply opacity-70">
      <h3 class="text-[18px] font-semibold ">Tech Stack</h3>
    </div>

    <div class="containers flex flex-col flex-wrap gap-2 ">
      <div class="container">
        <p class="text-md font-medium">Frontend</p>

        <div class="sub-con flex w-full h-[20px]  flex-wrap  gap-2">
          <div class="text-[12px] w-[70px] border border-gray-300 text-center rounded-md">VueJS</div>
          <div class="text-[12px] w-[70px] border border-gray-300 text-center rounded-md">JS</div>
          <div class="text-[12px] w-[70px] border border-gray-300 text-center rounded-md">HTML</div>
          <div class="text-[12px] w-[70px] border border-gray-300 text-center rounded-md">CSS</div>
          <div class="text-[12px] w-[90px] border border-gray-300 text-center rounded-md">Tailwind CSS</div>


        </div>
    </div>

    <div class="container pt-7 md:pt-12 lg:pt-7 ">
        <p class="text-md font-medium">Backend</p>

        <div class="sub-con flex gap-2">
          <div class="text-[12px] w-[70px] border border-gray-300 text-center rounded-md">MongoDB</div>
          <div class="text-[12px] w-[70px] border border-gray-300 text-center rounded-md">MySQL</div>
          <div class="text-[12px] w-[70px] border border-gray-300 text-center rounded-md">PHP</div>
      

        </div>
    </div>

    <div class="container">
        <p class="text-md font-medium">Design</p>

        <div class="sub-con flex  gap-2">
          <div class="text-[12px] w-[70px] border border-gray-300 text-center rounded-md">Photoshop</div>
          <div class="text-[12px] w-[70px] border border-gray-300 text-center rounded-md">Figma</div>
          <div class="text-[12px] w-[70px] border border-gray-300 text-center rounded-md">Canva</div>
      

        </div>
    </div>
    </div>
  

    <!-- <div class="stack-container grid grid-cols-3 items-center gap-2 justify-center">
          <img :src="vue" alt="" class="h-[40px] w-[40px]  lg:h-[60px] lg:w-[60px]  grayscale-50 rounded-md p-1 inset-shadow-md inset-shadow-gray-50 bg-gradient-to-b from-gray-200 to-gray-400">
          <img :src="html" alt="" class="h-[40px] w-[40px]  lg:h-[60px] lg:w-[60px]  p-1 rounded-md inset-shadow-sm inset-shadow-orange-300  bg-gradient-to-b from-orange-100 from-5% to-orange-300">
          <img :src="js" alt="" class="h-[40px] w-[40px]  lg:h-[60px] lg:w-[60px]  p-1 rounded-md inset-shadow-sm inset-shadow-yellow-300  bg-gradient-to-b from-yellow-100 from-5% to-yellow-200">
          <img :src="pinia" alt="" class="h-[40px] w-[40px]  lg:h-[60px] lg:w-[60px]  p-1 rounded-md  inset-shadow-sm inset-shadow-yellow-300  bg-gradient-to-b from-yellow-100 from-5% to-yellow-200">
          <img :src="figma" alt="" class="h-[40px] w-[40px]  lg:h-[60px] lg:w-[60px]  p-1 rounded-md inset-shadow-sm inset-shadow-blue-300  bg-gradient-to-b from-red-100 from-5% to-green-200">
          <img :src="css" alt="" class="h-[40px] w-[40px]  lg:h-[60px] lg:w-[60px]  p-1 rounded-md inset-shadow-sm inset-shadow-blue-300  bg-gradient-to-b from-blue-100 from-5% to-blue-200">
          <img :src="tailwind" alt="" class="h-[40px] w-[40px]  lg:h-[60px] lg:w-[60px]  p-1 rounded-md inset-shadow-sm inset-shadow-blue-300  bg-gradient-to-b from-blue-100 from-5% to-blue-200">
          <img :src="git" alt="" class="h-[40px] w-[40px]  lg:h-[60px] lg:w-[60px]  p-1 rounded-md inset-shadow-sm inset-shadow-orange-300  bg-gradient-to-b from-orange-100 from-5% to-orange-200">
          <img :src="github" alt="" class="h-[40px] w-[40px]  lg:h-[60px] lg:w-[60px]  p-1 rounded-md inset-shadow-sm inset-shadow-black-300  bg-gradient-to-b from-black-100 from-5% to-black-200">
     
          <img :src="photoshop" alt=""  class="h-[40px] w-[40px]  lg:h-[60px] lg:w-[60px]  p-1 rounded-md inset-shadow-sm inset-shadow-blue-300  bg-gradient-to-b from-blue-200 from-5% to-black ">
    </div> -->
 
  </div>

<div class="proj  rounded-md border border-gray-300   drop-shadow-md p-2  bg-white col-span-4 row-span-2 col-start-1 row-start-5">
    <div class="header w-full flex justify-between">
        
      <div class="left flex gap-2 items-center">
        <img :src="laptop" alt="" class="h-4 mix-blend-multiply opacity-70">
         <h3 class="text-[18px] font-bold">Projects</h3>

      </div>
         <router-link to="/projects" class="right-0 ">View >></router-link>
      </div>
    
    <div class="containers h-[250px] grid overflow-y-scroll md:overflow-hidden md:overflow-y-scroll lg:grid-cols-2 gap-5 md:p-5">
          <div class="container1 opacity-50 hover:opacity-100 hover:cursor-pointer border p-2 border-gray-300 rounded-md h-[70px] w-[300px]">
              <p class="font-medium"> Entertainment App</p>
              <p class="desc text-[12px] ml-20">A responsive entertainment web application </p>
          </div>

          <div class="container2 opacity-50 hover:opacity-100  border p-2 border-gray-300 rounded-md h-[70px] w-[300px]">
              <p class="font-medium">  IT Asset Management</p>
              <p class="desc text-[12px] ml-20">A centralized IT asset management system for Zenith</p>
          </div>

          <div class="container1  opacity-50 hover:opacity-100 hover:cursor-pointer border p-2 border-gray-300 rounded-md h-[120px] w-[300px]  lg:w-[500px]">
              <p class="font-medium"> Application of Cloud Storage to Barangay Information System</p>
              <p class="desc text-[12px] ml-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, molestias vero inventore quo, tenetur </p>
          </div>
        </div>
  </div>


  <div class="setup rounded-md border border-gray-300  drop-shadow-md p-2  bg-white col-span-3 row-span-2 col-start-5 row-start-3 h-[250px]">
    <div class="header flex gap-2 items-center">
      <img :src="pc" alt="" class="h-4 mix-blend-multiply opacity-70">
      <h3 class="text-[18px] ">Setup</h3>
    </div>
    <div class="con h-[160px] w-full | flex items-center justify-center">
       <p class="font-lavyours text-5xl">Soon...</p>
    </div>
   
  
  </div>

  <div class="socials rounded-md border border-gray-300  drop-shadow-md p-2  bg-white col-span-3 row-span-2 col-start-5 row-start-5">
    <div class="header flex gap-2 items-center">
      <img :src="socials" alt="" class="h-4 mix-blend-multiply opacity-70">
        <h3 class="text-[18px] ">Socials</h3>
    </div>

    <div class="container p-2 flex flex-col gap-5">

      <div class="email bg-gray-100 p-2 rounded-md">
        <p class="text-sm">Email</p>
        <p class="font-semibold text-[20px] md:text-[10px] lg:text-[20px]">venarocenar73@gmail.com</p>
      </div>

      <div class="socials">
        <p>Social Links</p>
        <div class="containers flex gap-5">

          <ul class="flex gap-3 md:flex-wrap">
            <li class="cont1 h-15 w-15 bg-gray-100 p-2 rounded-md">
              
              <a href="https://github.com/vnrocnr">
                 <img :src="github" alt="">
              </a>
            </li>
            <li class="cont1 h-15 w-15 bg-gray-100 p-2 flex items-center justify-center rounded-md">
              <a href="https://www.linkedin.com/in/venarocenar/">
                   <img :src="linkedln" alt="" class="h-10 w-10 bg-red-50">
              </a>
            </li>
            <li class="cont1 h-15 w-15 bg-gray-100 p-2 rounded-md flex items-center justify-center">
              <a href="">
                 <img :src="insta" alt=""  class="h-10 w-10 bg-red-50">
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
   
  </div>
</div>

</template>
<script setup>
import laptop from '@/assets/flowbite_laptop-code-outline.svg'
import work from '@/assets/hugeicons_work.svg'
import stack from '@/assets/mage_stack.svg'
import pc from '@/assets/game-icons_pc.svg'
import socials from '@/assets/tabler_social.svg'
import { ref, onMounted } from 'vue';
import { useMouse, useElementSize, throttledWatch } from '@vueuse/core';
import figma from '@/assets/devicon_figma.svg'
import html from '@/assets/material-icon-theme_html.svg'
import css from '@/assets/skill-icons_css.svg'
import tailwind from '@/assets/devicon_tailwindcss.svg'
import git from '@/assets/devicon_git.svg'
import github from '@/assets/mdi_github.svg'
import vue from '@/assets/logos_vue.svg'
import photoshop from '@/assets/logos_adobe-photoshop.svg'
import js from '@/assets//vscode-icons_file-type-js.svg'
import pinia from '@/assets/logos_pinia.svg'
import digi from '@/assets/digi logo.png'
import zen from '@/assets/zeneith.png'

import {timelineElements} from '@/stores/timeline.js'

import linkedln from '@/assets/ion_social-linkedin.svg'
import insta from '@/assets/simple-line-icons_social-instagram.svg'
const projectsContainer = ref(null); // Reference to the Projects container
const eye = ref(null);
const rotationDegrees = ref(0);
const eyeLocation = ref(null);
const { x: mouseX, y: mouseY } = useMouse({ target: projectsContainer }); // Track only inside Projects container
const { width, height } = useElementSize(projectsContainer);

onMounted(() => {
  if (eye.value) {
    eyeLocation.value = eye.value.getBoundingClientRect();
  }
});

// Update eye location when the container resizes
throttledWatch(
  [width, height],
  () => {
    if (eye.value) {
      eyeLocation.value = eye.value.getBoundingClientRect();
    }
  },
  { throttle: 200 }
);

// Track mouse movement **only inside Projects container**
throttledWatch(
  [mouseX, mouseY],
  ([x, y]) => {
    if (eyeLocation.value && projectsContainer.value) {
      const containerRect = projectsContainer.value.getBoundingClientRect();
      const eyeCenterX = eyeLocation.value.left + eyeLocation.value.width / 2;
      const eyeCenterY = eyeLocation.value.top + eyeLocation.value.height / 2;
      
      // Convert mouse position relative to the container
      const relativeX = x + containerRect.left;
      const relativeY = y + containerRect.top;

      const radianDegrees = Math.atan2(relativeY - eyeCenterY, relativeX - eyeCenterX);
      rotationDegrees.value = radianDegrees * (180 / Math.PI);
    }
  },
  { throttle: 1000 / 60 }
);


</script>


<style scoped>

@keyframes appear{
    from {
      opacity: 0;
      scale: 0.5;

    } to{
      opacity: 1;
      scale: 1;
    }
  }

  .box{
    animation: appear linear;
    animation-timeline: view();
    animation-range: entry 30%;
  }
</style>