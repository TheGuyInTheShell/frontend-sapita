<script setup>

import { onMounted } from 'vue'
import { initDrawers, initCollapses } from 'flowbite'
import NavBar from '../components/NavBar.vue'
import DashBoard from '../components/DashBoard.vue'
import { useSessionStore } from '../../login/store/session'
// initialize components based on data attribute selectors

const store = useSessionStore()
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
   store.initSession()
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