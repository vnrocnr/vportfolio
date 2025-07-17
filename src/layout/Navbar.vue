<template>

  
   <nav
      class="hidden dark:shadow-amber-200 dark:shadow-lg  dark:bg-black sticky top-0 z-10 h-[100px] w-full px-[30px] md:px-[100px] lg:px-[400px] sm:flex items-center justify-between bg-white "
    >
      <img
        :src="Dark ? logowh : Logo"
        alt="venar ocenar logo"
        class="h-[55px] w-[55px] md:h-[89px] md:w-[89px] lg:h-[115px] lg:w-[115px]"
      />

      <div class="links flex gap-5 dark:text-white">
        <router-link to="/" exact-active-class="active">Home</router-link>
        <!-- <router-link to="/about" exact-active-class="active">About</router-link> -->
        <router-link to="/projects" exact-active-class="active">Projects</router-link>
        <!-- <router-link to="/setup" exact-active-class="active">Setup</router-link> -->
        <router-link to="/contact" exact-active-class="active">Contact</router-link>
      </div>

      <div class="sm:visible extra-buttons flex gap-10 h-5">
        <button @click="toggleTheme" class="hover:cursor-pointer"><img :src="Dark ? Light : DarkMode" alt="" /></button>
        <button @click="handlePopup" class="hover:cursor-pointer"><img :src="Dark? linkWH :Link " alt="" /></button>
      </div>

      
    </nav>
 <div class="sm:hidden  sticky top-0 z-50 dark:bg-black dark:text-white flex items-center justify-between p-4">
      <button @click="toggleMenu" class="text-black dark:text-white">☰</button>

      <div class="sm:visible extra-buttons flex gap-10 h-5">
        <button @click="toggleTheme" class="hover:cursor-pointer dark:text-white"><img :src="Dark ? Light : DarkMode" alt="" /></button>
        <button @click="handlePopup" class=""><img :src="Dark? linkWH :Link " class="transition-all delay-200" alt="" /></button>
      </div>

    
    </div>

     <div v-if="openSocials" class="absolute overflow-hidden p-5 md:p-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center top-0 right-0 h-full w-full  z-100 border border-gray-300 ">
      <div class=" dark:bg-black bg-white rounded-2xl h-[400px] w-[400px] border border-gray-300 p-5 ">
                
          <div class="relative header w-full">
            <button class="absolute hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-150 delay-200 ease-in-out z-10 h-10 w-10 right-0 hover:cursor-pointer bg-gray-200 rounded-full" @click="handlePopup" >x

           
            </button>
          </div>
        <Socs class="pt-10"/>
      </div>

  </div>

 

   

   

    <div v-if="menuOpen === true" class="small-menu  z-50 absolute h-screen w-[300px] dark:bg-black dark:text-white bg-white top-0 p-10 rounded-r-2xl">

      <div class="relative flex flex-col   gap-10 h-full w-full">

        <button class="close absolute font-medium right-0 text-2xl dark:text-black bg-gray-100 h-10 w-10 rounded-full" @click="closeMenu">x</button>

      
           <p class="font-bold text-5xl pt-15">V</p>

      <div class="links flex flex-col gap-5 dark:bg-black dark:text-white bg-white text-md">
        <router-link to="/" exact-active-class="active2" class="w-full rounded-md p-1" @click="handleClick">Home</router-link>
        <!-- <router-link to="/projects" exact-active-class="active2" class="w-full rounded-md p-1" @click="handleClick">Projects</router-link>
        <router-link to="/contact" exact-active-class="active2" class="w-full rounded-md p-1" @click="handleClick">Contact</router-link> -->
      </div>

      </div>
   
    </div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { router } from 'vue-router'
import DarkMode from '@/assets/images/dark_mode.svg'
import Light from '@/assets/images/lightWH.svg'
import Logo from '@/assets/images/mylogobl.svg'
import logowh from '@/assets/images/mylogoblWH.png'
import Link from '@/assets/images/solar_link-bold.svg'
import linkWH from '@/assets/images/linkWH.svg'
import { useTheme } from '@/stores/useTheme'
import Socs from '@/components/Socials.vue'

const menuOpen = ref(false)
const openSocials = ref(false)


const { toggleTheme, Dark } = useTheme()
const closeMenu = () => {
  menuOpen.value = false
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const handleClick = () => {
  menuOpen.value = false
  
}

const handlePopup = () => {
  openSocials.value = !openSocials.value
}


</script>

<style scoped>
.active {
  font-weight: bold;

  border-bottom: 2px solid rgb(14, 14, 19); 
}

.active2 {
  font-weight: bold;
  background-color: rgb(240, 240, 240);


}

.dark .active2 {
  color:rgb(255, 255, 255);
  background-color: rgba(240, 240, 240, 0.3);
}
</style>
