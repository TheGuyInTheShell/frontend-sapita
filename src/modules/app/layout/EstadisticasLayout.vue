<script setup>
import {defineAsyncComponent} from 'vue'
import { useContextStore } from '../store/context';
import { useRouter } from 'vue-router';
const FloatNav = defineAsyncComponent(()=>import('../components/FloatNav.vue'))
const SubRoutes = defineAsyncComponent(()=>import('../components/contentFloat/SubRoutes.vue'))

const contextStore = useContextStore()
const router = useRouter()

let routesArray

if (contextStore.getUserType === 'render_admin') {
    routesArray = [
        {
            titulo: "Totales",
            hash: ""
        },
        {
            titulo: "Personal",
            hash: "#personal"
        },
        {
            titulo: "Mensuales",
            hash: "#mensuales"
        },
        {
            titulo: "Anuales",
            hash: "#anuales"
        },
        {
            titulo: "desempeño",
            hash: "#desempenio"
        }
    ]
}else{
    router.push({name: 'estadisticas-display', hash: '#personal'})
}


</script>


<template>
    <FloatNav v-if="routesArray">
        <SubRoutes :routes="routesArray" />
    </FloatNav>
    <section class="margin-float flex flex-col gap-6">
        <RouterView />
    </section>
  </template>
  
  