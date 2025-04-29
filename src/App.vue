<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import MainLayout from '@/layout/index.vue'

const Dark = ref(false)
onMounted(() => {
  Dark.value = document.documentElement.classList.contains('dark')
})
</script>

<template >

 <main class="m-0 p-0 h-screen w-screen bg-transparent overflow-x-hidden">
         <MainLayout class="font-poppins" />
       
 </main>
    
</template>

<style scoped>


</style>
