<script setup>
import {defineAsyncComponent} from 'vue'
const FloatNav = defineAsyncComponent(()=>import('../components/FloatNav.vue'))
const SubRoutes = defineAsyncComponent(()=>import('../components/contentFloat/SubRoutes.vue'))

const routesArray = [
    {
        titulo: "Totales",
        nombre: "total"
    },
    {
        titulo: "Mensuales",
        nombre: "mensuales"
    },
    {
        titulo: "Anuales",
        nombre: "anuales"
    },
    {
        titulo: "desempeño",
        nombre: "desempenio"
    }
]

</script>


<template>
    <FloatNav>
        <SubRoutes :routes="routesArray" />
    </FloatNav>
    <section class="margin-float flex flex-col gap-6">
        <RouterView />
    </section>
  </template>
  
  