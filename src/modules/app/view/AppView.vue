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
            <main class="pl-2 sm:p-2 sm:ml-64 bg-slate-800">
                <RouterView />
            </main>
        </div>

</template>

<style scoped>

main{
    padding-top: 4rem;
}

</style>