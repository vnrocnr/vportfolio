<template>

    <div class=" flex flex-col relative md:h-[400px] w-screen  items-center justify-center gap-5 my-[20px] ">
        <div class="absolute inset-0 -z-10  bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        <img :src="ribbon" alt="ribbon" class="h-[60px] absolute -top-13 right-50  md:top-25 md:right-90 lg:top-13 lg:right-235">
            <p class="font-bold !important  text-[35px] items-center md:text-[48px]">Frontend Developer</p>

            <div class="desc">
                <p class=" max-w-[400px] md:max-w-[440px] text-center md:text-[16px]">Creating beautiful and functional web experiences with clean code
                    and thoughtful design with <span>Vue js</span> and <span>Tailwind CSS.</span></p>
            </div>

            <div class="butons-container flex gap-5">

                
                <button class="border-1 rounded-4xl p-2 px-10 bg-black text-white hover:bg-amber-200 hover:text-amber-800 hover:cursor-pointer hover:drop-shadow-lg hover:drop-shadow-amber-300">
                    
                    
                    View my Resume
                
                
                </button>
              
            </div>

            
    </div>

</template>

<script setup lang="ts">
import ribbon from '@/assets/ribbon.png'
import call from '@/assets/call.svg'
</script>

