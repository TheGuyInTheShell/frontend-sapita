<script setup>
import FloatNav from '../components/FloatNav.vue';
import {ref} from 'vue'

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
])

</script>

<template>
     <FloatNav :subRutasNavegables="subRutasNavegables" />
     <section class="flex flex-col gap-6">
          <RouterView  />
     </section>
</template>