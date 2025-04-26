<template>

  <div class="hidden px-[30px] md:px-[100px] lg:px-[400px] sm:flex items-center justify-between  bg-white">
    <img :src="Logo" alt="" class="h-[55px] w-[55px] md:h-[89px] md:w-[89px] lg:h-[115px] lg:w-[115px]">

    <div class="links flex gap-5">

      <router-link to="/" exact-active-class="active">Home</router-link>
<router-link to="/about" exact-active-class="active">About</router-link>
<router-link to="/projects" exact-active-class="active">Projects</router-link>
<!-- <router-link to="/setup" exact-active-class="active">Setup</router-link> -->
<router-link to="/contact" exact-active-class="active">Contact</router-link>


      <!-- <ul class="text-gray-700 md:text-[15px] flex gap-5 text-md hover:cursor-pointer">
        <li class="hover:bg-black hover:text-white">Home</li>
        <li class="hover:bg-black hover:text-white">Projects</li>
        <li class="hover:bg-black hover:text-white">About</li>
        <li class="hover:bg-black hover:text-white">Contact</li>
      </ul> -->
      <input type="search" placeholder="Search in Site" class="p-1 h-7 border border-gray-300 rounded-sm">
    </div>

    <div class="sm:visible extra-buttons flex gap-10 h-5">
      <button><img :src="DarkMode" alt=""></button>
      <button><img :src="Link" alt=""></button>
    </div>
  </div>

  <div class="sm:hidden flex items-center justify-between p-4">
    <button @click="toggleMenu" class="text-black">☰</button>
  </div>

 
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {router} from 'vue-router';
import DarkMode from '@/assets/dark_mode.svg';
import Logo from '@/assets/mylogobl.svg';
import Link from '@/assets/solar_link-bold.svg';

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};


</script>

<style scoped>
.active {
  font-weight: bold;
 
  border-bottom: 2px solid rgb(14, 14, 19); /* Optional: Add underline effect */
}

</style>