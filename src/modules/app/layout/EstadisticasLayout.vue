<script setup>
import {ref} from 'vue'
import FloatNav from '../components/FloatNav.vue';
const subRutasNavegables = ref([
   {
      titulo: 'Total',
      icono: 'history',
      link: {
         nombre: 'app-record',
         ruta: '/app/record'
      }
   },
   {
      titulo: 'Componentes',
      icono: 'history',
      link: {
         nombre: 'app-record',
         ruta: '/app/record'
      }
   },
   {
    "titulo": "et",
    "icono": "nostrud",
    "link": {
      "nombre": "aute",
      "ruta": "qui"
    }
  },
  {
    "titulo": "laborum",
    "icono": "officia",
    "link": {
      "nombre": "velit",
      "ruta": "eu"
    }
  },
  {
    "titulo": "voluptate",
    "icono": "magna",
    "link": {
      "nombre": "proident",
      "ruta": "non"
    }
  },
  {
    "titulo": "id",
    "icono": "aliquip",
    "link": {
      "nombre": "occaecat",
      "ruta": "laboris"
    }
  },
  {
    "titulo": "ullamco",
    "icono": "pariatur",
    "link": {
      "nombre": "incididunt",
      "ruta": "aliquip"
    }
  }
])

</script>


<template>
    <FloatNav :subRutasNavegables="subRutasNavegables" />
    <section class="margin-float flex flex-col gap-6">
        <RouterView />
    </section>
  </template>
  
  