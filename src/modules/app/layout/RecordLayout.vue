<script setup>
import { ref } from 'vue';
import AddRecordModal from '../components/AddRecordModal.vue'
import FloatNav from '../components/FloatNav.vue'


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
    titulo: 'et',
    icono: 'nostrud',
    link: {
      nombre: 'aute',
      ruta: 'qui'
    }
  },
  {
    titulo: 'laborum',
    icono: 'officia',
    link: {
      nombre: 'velit',
      ruta: 'eu'
    }
  },
  {
    titulo: 'voluptate',
    icono: 'magna',
    link: {
      nombre: 'proident',
      ruta: 'non'
    }
  },
  {
    titulo: 'id',
    icono: 'aliquip',
    link: {
      nombre: 'occaecat',
      ruta: 'laboris'
    }
  },
  {
    titulo: 'ullamco',
    icono: 'pariatur',
    link: {
      nombre: 'incididunt',
      ruta: 'aliquip'
    }
  }
])


</script>


<template>
   
   <section class="tranlate-btn-add fixed flex items-end pb-10 z-13">
      <AddRecordModal />
   </section>

  <FloatNav :subRutasNavegables="subRutasNavegables" :busqueda="true" />

  <section class="margin-float pb-28">
    <RouterView />
  </section>

  
   
</template>


<style scoped>
  .table-container{
    height: 10%;
  }
   .z-13{
      z-index: 13;
   }
</style>