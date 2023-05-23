<script setup>
import {ref, defineAsyncComponent} from 'vue'
const CustomLink = defineAsyncComponent(()=> import('./CustomLink.vue'))

const rutasNavegables = ref([
   {
      titulo: 'Record',
      icono: 'history',
      link: {
         nombre: 'app-record',
         ruta: '/app/record'
      }
   },
   {
      titulo: 'Estadisticas',
      icono: 'chart-infographic',
      link: {
         nombre: 'estadisticas-mensuales',
         ruta: '/estadisticas'
      }
   },
   {
      titulo: 'Inventario',
      icono: 'list-check',
      link: {
         nombre: 'inventario-total',
         ruta: '/inventario'
      }
   },
   {
      titulo: 'Trabajadores',
      icono: 'users',
      link: {
         nombre: 'app-trabajadores',
         ruta: '/trabajadores'
      }
   },

])

</script>


<template>
    
   <aside id="logoSidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-slate-500 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li :key="seccion" v-for="seccion in rutasNavegables">
            <RouterLink
               :custom="true" 
               :to="{ name: seccion.nombre}"
               >
               <CustomLink :seccion="seccion"></CustomLink>
            </RouterLink>
         </li>
      </ul>
   </div>
</aside>

</template>
