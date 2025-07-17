<template>
  <div class="relative dark:bg-black dark:text-white h-full items-center flex flex-col gap-2">
    <p class="text-[20px]">Socials</p>

    <div class="socs w-full flex flex-col gap-2">
      <div class="soc1">
        <a href="http://www.linkedin.com/in/venarocenar" class="w-full flex gap-2 items-center dark:hover:bg-gray-600  hover:bg-gray-100 hover:rounded-md transition-all duration-200 ease-in-out p-2 h-full">
          <img :src="Dark ? linkedlinWH : linkedln" alt="" class="h-4" />
          <p>Linkedln</p>
        </a>
      </div>
      <div class="soc1">
        <a href="https://github.com/vnrocnr" class="w-full flex gap-2 items-center dark:hover:bg-gray-600  hover:bg-gray-100 hover:rounded-md transition-all duration-200 ease-in-out p-2 h-full">
          <img :src="Dark ? githubWH : github" alt="" class="h-4" />
          <p>Github</p>
        </a>
      </div>
      <div class="soc1">
        <a href="mailto:venarocenar73@gmail.com" class="w-full flex gap-2 items-center dark:hover:bg-gray-600  hover:bg-gray-100 hover:rounded-md transition-all duration-200 ease-in-out p-2 h-full">
          <img :src="Dark ? mailWH : mail" alt="" class="h-4" />
          <p>Gmail</p>
        </a>
      </div>
      <div class="soc1">
        <a href="https://web.facebook.com/profile.php?id=61575366915814" class="w-full flex gap-2 items-center dark:hover:bg-gray-600  hover:bg-gray-100 hover:rounded-md transition-all duration-200 ease-in-out p-2 h-full">
          <img :src="Dark ? facebookWH : facebook" alt="" class="h-4" />
          <p>Facebook</p>
        </a>
      </div>
      <div class="soc1">
        <a href="" class="w-full flex gap-2 items-center dark:hover:bg-gray-600  hover:bg-gray-100 hover:rounded-md transition-all duration-200 ease-in-out p-2 h-full">
          <img :src="Dark ? instaWH : insta" alt="" class="h-4" />
          <p>Instagram</p>
        </a>
      </div>
    </div>

    <p class="absolute bottom-0">Feel free to view my profile ^^</p>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/stores/useTheme'
const { Dark } = useTheme()
import linkedln from '@/assets/images/simple-line-icons_social-linkedin.svg'
import linkedlinWH from '@/assets/images/linkedinWH.svg'
import github from '@/assets/images/simple-line-icons_social-github.svg'
import githubWH from '@/assets/images/githubWH.svg'
import insta from '@/assets/images/simple-line-icons_social-instagram.svg'
import instaWH from '@/assets/images/instagramWH.svg'
import facebook from '@/assets/images/iconoir_facebook.svg'
import facebookWH from '@/assets/images/iconoir_facebookWH.svg'
import mail from '@/assets/images/si_mail-line.svg'
import mailWH from '@/assets/images/si_mail-lineWH.svg'


</script>
