<template>
  <div class="h-full w-full dark:text-white dark:bg-black md:w-screen px-10 md:px-30 lg:px-100 pt-10 flex flex-col gap-10">
    
    
    
    
    
    
    <div class="header">
      <h1 class="font-bold text-4xl">Projects</h1>
      <p class="max-w-[800px]">
        Here’s a selection of my recent work. Each project reflects my skills in frontend
        development, clean code, and thoughtful UI/UX design. From web apps to responsive sites — I
        build with performance and user experience in mind.
      </p>
    </div>

    <div class="proj-container flex flex-col gap-10">
      <div class="proj1 shadow-md rounded-md flex flex-col md:items-center gap-10 md:flex-col lg:flex-row justify-between p-3">
        <img :src="artboard" alt="" class="md:h-[250px] lg:h-[310px]" />

        <div class="right flex flex-col flex-wrap gap-4">
          <p class="font-semibold text-3xl ">Entertainment App</p>

          <p class="desc max-w-[500px]">
            I developed a responsive multi-page Entertainment Web App using Vue.js, Tailwind CSS,
            Pinia, and Vue Router. Users can browse and search movies or TV series, switch between
            categories, and manage bookmarks. The app loads data from a local JSON file and features
            dynamic UI with smooth interactions across all devices.
          </p>

          <div class="tech">
               <p class="font-semibold">Tech Stack</p>
          <div class="con flex flex-wrap dark:text-black  gap-3">
            <p class="bg-gray-200 p-2 rounded-lg">Vue.js</p>
            <p class="bg-gray-200 p-2 rounded-lg">Tailwind.css</p>
            <p class="bg-gray-200 p-2 rounded-lg">Pinia</p>
            <p class="bg-gray-200 p-2 rounded-lg">Vue Router</p>
            <p class="bg-gray-200 p-2 rounded-lg">Github</p>
          </div>
          </div>
       
        </div>
      </div>

      <div class="proj2  shadow-md rounded-md flex flex-col gap-10 md:items-center   md:flex-col lg:flex-row justify-between p-3">
        <img :src="asset" alt="" class="md:h-[250px] lg:h-[310px]" />

        <div class="right flex flex-col  flex-wrap gap-4">
          <p class="font-semibold text-3xl">IT Asset Management App</p>

          <p class="desc max-w-[500px]">
            This is our final project for Zenith as an IT intern which deepened my passion and skills in programming. Moreover, this experience allows me to sharpen my soft skills such as collaboration, communication, and problem-solving.
          </p>

          <div class="tech  h-[110px]">
               <p class="font-semibold">Tech Stack</p>
          <div class="con flex flex-wrap w-full h-[40px] gap-3 dark:text-black">
            <p class="bg-gray-200 p-2 rounded-lg ">Admin LTE Bootstrap</p>
            <p class="bg-gray-200 p-2 rounded-lg ">PHP</p>
            <p class="bg-gray-200 p-2 rounded-lg ">MySQL</p>
            <p class="bg-gray-200 p-2 rounded-lg ">CSS</p>
            <p class="bg-gray-200 p-2 rounded-lg ">Github</p>
          </div>
          </div>
       
        </div>
      </div>

      <div class="proj3  shadow-md rounded-md flex flex-col items-center gap-10 md:items-center   md:flex-col lg:flex-row justify-between p-3">
        <img :src="caps" alt="" class="md:h-[250px] lg:h-[560px]" />

        <div class="right flex flex-col md:pl-10  flex-wrap gap-4">
          <p class="font-semibold text-3xl">Application of Cloud Storage to Barangay Information System</p>

          <p class="desc max-w-[500px]">
            As the main developer for our capstone project, I led the design and implementation of a cloud-based system to manage barangay information. This project tested my full-stack development skills and deepened my understanding of secure system design.
          </p>

          <div class="tech">
               <p class="font-semibold">Tech Stack</p>
          <div class="con flex flex-wrap  gap-3 dark:text-black">
            <p class="bg-gray-200 p-2 rounded-lg">HTML</p>
            <p class="bg-gray-200 p-2 rounded-lg">MongoDB</p>
            <p class="bg-gray-200 p-2 rounded-lg">MySQL</p>
            <p class="bg-gray-200 p-2 rounded-lg">Tailwind CSS</p>
      
          </div>
          </div>
       
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import pc from '@/assets/pc.png'
import cp from '@/assets/cp.png'
import tab from '@/assets/tab.png'
import artboard from '@/assets/Artboard.png'
import asset from '@/assets/Asset.png'
import caps from '@/assets/capstone.png'
</script>
