<script setup>
import { computed, defineAsyncComponent} from 'vue'
import { useContextStore } from '../store/context'
import { useSessionStore } from '../../login/store/session';
import { useRouter } from 'vue-router';
const CustomLink = defineAsyncComponent(()=> import('./CustomLink.vue'))

const sessionStore = useSessionStore()
const contextStore = useContextStore() 

const router = useRouter()

const dashBoard = computed(()=> contextStore.getDashBoard)

const handleLogout = async ()=>{
   await sessionStore.dropSession()
   router.push({name: 'login'})
}

</script>


<template>
    
   <aside id="logoSidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-slate-500 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li :key="seccion" v-for="seccion in dashBoard">
            <RouterLink
               :custom="true" 
               :to="{ name: seccion.nombre}"
               >
               <CustomLink :seccion="seccion"></CustomLink>
            </RouterLink>
         </li>
         <li>
               <button @click="handleLogout" class="flex items-center p-2 w-full rounded-lg text-gray-300 dark:text-white dark:bg-slate-900 hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <img :src=" '/assets/icons/dashboard/logout.svg' " alt="icon">
                  <span class="ml-3">Cerrar sesion</span>
               </button>
         </li>
      </ul>
   </div>
</aside>

</template>
