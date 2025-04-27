<template>
    <div class=" px-10 lg:px-100 lg:h-[800px]">
        <div class="relative h-full w-full ">
            <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        
        
            <div class="inside flex flex-col gap-5">
                 <h1 class="text-4xl font-bold">Let's get in touch</h1>
                 <p>Don't hesitate to talk with me...</p>
      
            <div class="sub-con border-t  mt-2 flex lg:gap-10 flex-col md:flex-col lg:flex-row sm:text-center justify-between items-center rounded-2xl p-3 md:p-20 border-gray-300">
             
            
             <div class="left flex flex-col gap-5 text-center">
                 <h1 class="text-3xl font-bold">Open to opportunities — drop me a message!</h1>
         
             <p class="md:max-w-[590px] sm:text-center">I’m currently open to new opportunities, collaborations, or freelance projects. Whether you have a question or just want to say hi, feel free to drop a message — I’ll get back to you as soon as possible.</p>
     
             </div>
 
             <div class="right">
                 <form action="" class="flex flex-col gap-3">
                     <div class="inputs flex flex-col md:flex-row  w-full gap-4">
                         <input type="text" placeholder=" Name" class="w-full border border-gray-300 p-3 rounded-md">
                     <input type="email" placeholder="Email Address" class="w-full border border-gray-300 p-3 rounded-md">
                     
                     </div>
                 
                     <textarea name="" id="" placeholder="Your message" class="h-[200px] w-[300px] lg:w-[600px] border border-gray-300  p-3 rounded-md">
 
                     </textarea>
 
                     <input type="submit" placeholder="Send Message" class="border bg-black text-white w-[200px] h-[50px] hover:cursor-pointer ">
                 </form>
             </div>
 
        </div>
            </div>
        
        
        </div>
       
       
    </div>
</template>

<script setup lang="ts">
import Contact from '@/components/Contact.vue';
</script>