<script setup>
import {ref} from 'vue'
const seccionesNavegables = ref([
   {
      titulo: 'Dashboard',
      icono: '',
      link: {
         nombre: '',
         ruta: '#'
      }
   },
   {
      titulo: 'Kanban',
      icono: '',
      link: {
         nombre: '',
         ruta: '#'
      }
   },
   {
      titulo: 'Inbox',
      icono: '',
      link: {
         nombre: '',
         ruta: '#'
      }
   },
   {
      titulo: 'Users',
      icono: '',
      link: {
         nombre: '',
         ruta: '#'
      }
   },
   {
      titulo: 'Users',
      icono: '',
      link: {
         nombre: '',
         ruta: '#'
      }
   }

])

</script>


<template>
    
    <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li :key="seccion" v-for="seccion in seccionesNavegables">
            <a :href="seccion.link.ruta" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <img :src="seccion.icono" alt="icon">
               <span class="ml-3">{{ seccion.titulo }}</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

</template>