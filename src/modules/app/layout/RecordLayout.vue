<script setup>
import { ref, defineAsyncComponent, provide } from 'vue';
import { useRecordStore } from '../store/record';

provide("inputs", [
  {
    text: "nombre",
    name: "nombre",
    type: "text"
  },
  {
    text: "descripcion",
    name: "descripcion",
    type: "text"
  },
  {
    text: "donde sera el desarrollo?",
    name: "sitio_desarrollo",
    type: "select",
    options: ["interno", "externo"]
  },
  {
    text: "detalles del sitio",
    name: "sitio_detalles",
    type: "text",
  },
])

provide("route", "tareas")

const AddModal = defineAsyncComponent(()=>import('../components/AddModal.vue'))
const FloatNav = defineAsyncComponent(()=>import('../components/FloatNav.vue'))
const PaginationFooter = defineAsyncComponent(()=>import('../components/PaginationFooter.vue'));

const storeRecord = useRecordStore() 

const subRutasNavegables = ref([
  {
    titulo: 'Total',
    nombre: 'app-record',
    ruta: '/app/record'
  },
  {
    titulo: 'Componentes',
    nombre: 'app-record',
    ruta: '/app/record'
  },
  {
    titulo: 'et',
    nombre: 'aute',
    ruta: 'qui'
  },
  {
    titulo: 'laborum',
    nombre: 'velit',
    ruta: 'eu'
  },
  {
    titulo: 'voluptate',
    nombre: 'proident',
    ruta: 'non'
  },
  {
    titulo: 'id',
    nombre: 'occaecat',
    ruta: 'laboris'
  },
  {
    titulo: 'ullamco',
    nombre: 'incididunt',
    ruta: 'aliquip'
  }
])


</script>


<template>
   
   <section class="tranlate-btn-add fixed flex items-end pb-10 z-13">
      <AddModal />
   </section>

  <FloatNav :store="storeRecord" :subRutasNavegables="subRutasNavegables" :busqueda="true" />

  <section class="margin-float pb-28">
    <RouterView />
  </section>

  <PaginationFooter :store="storeRecord" />
   
</template>


<style>
  .table-container{
    height: 10%;
  }
   .z-13{
      z-index: 13;
   }
</style>