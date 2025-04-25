<template>
    <Navbar class=""/>

    <main class="">
        <div >
            <router-view/>
        </div>
    </main>

    <BottomBar/>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Navbar from '@/layout/Navbar.vue';
import BottomBar from './BottomBar.vue';
</script>

<style scoped>


</style>