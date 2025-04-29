<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import TheWelcome from '@/components/TheWelcome.vue';
import WelcomeItem from '@/components/WelcomeItem.vue';
import AboutMe from '@/components/AboutMe.vue';
import Services from '@/components/Services.vue';
import Contact from '@/components/Contact.vue';

</script>

<template>
  <main ref="main" class="bg-transparent  overflow-hidden">
    <div class="pad-containers justify-center">
      <TheWelcome class="a overflow-hidden" />
      <WelcomeItem class="b" />
    </div>
    <AboutMe  />

    <Services/>
    <Contact/>
  </main>
</template>
