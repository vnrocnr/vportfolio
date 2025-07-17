<template>
    <main class="px-10 flex flex-col items-center py-[20px] gap-10 dark:bg-black dark:text-white">
        <h2 class="font-bold font-poppins text-2xl">Professional Services</h2>

        <div class="description">
            <p class="max-w-[880px] text-center">I provide high-quality frontend development services, creating responsive, user-friendly, and visually appealing web applications. 
                With expertise in modern frameworks and best practices, I ensure seamless user experiences and efficient performance.</p>
        </div>

        <div class="sub-container flex flex-col md:flex-row">
                <div class="sub1 h-[110px] p-5 border border-gray-300  md:rounded-tl-md md:rounded-bl-md lg:rounded-tl-md lg:rounded-bl-md">
                    <div class="header flex gap-3">
                        <img :src="Dark ? codeWH : code" alt="" class="text-red dark:text-white">
                        <p class="font-medium">Web Development</p>

                       
                    </div>
                     <p class="max-w-[250px]">Responsive, modern websites with seamless user experiences.</p>
                </div>


                <div class="sub2 h-[120px] md:h-[110px] p-5 border border-gray-300  md:rounded-tr-md md:rounded-br-md lg:rounded-tr-md lg:rounded-br-md ">
                    <div class="header flex gap-3">
                        <img :src="Dark ? threedWH : threed" alt="" class="text-red ">
                        <p class="font-medium">3d Modelling</p>

                       
                    </div>
                     <p class="max-w-[350px]">Designing custom 3D objects using Blender for use in visual content,or web integration.</p>
                </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import code from '@/assets/images/mdi_code.svg'
import threed from '@/assets/images/cil_3d.svg' 
import codeWH from '@/assets/images/mdi_codeWH.svg'
import threedWH from '@/assets/images/cil_3dWH.svg'

import { useTheme } from '@/stores/useTheme'
const {Dark} = useTheme()

</script>