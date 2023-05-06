<script setup>

import { onMounted } from 'vue'
import { initDrawers, initCollapses } from 'flowbite'
import NavBar from '../components/NavBar.vue'
import DashBoard from '../components/DashBoard.vue'
// initialize components based on data attribute selectors
onMounted(() => {
   // initAccordions();
   // initCarousels();
   initCollapses();
   //  initDismisses();
    initDrawers();
   //  initDropdowns();
   //  initModals();
   //  initPopovers();
   //  initTabs();
   //  initTooltips();
})

</script>

<template>

        <div class="w-full">
            <NavBar />
            <DashBoard />
            <RouterView />
        </div>

</template>