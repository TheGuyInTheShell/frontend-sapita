<script setup>
import { ref, defineAsyncComponent, provide } from 'vue';
import { useRecordStore } from '../store/record';
import QueryOptions from '../components/contentFloat/QueryOptions.vue';

const AddModal = defineAsyncComponent(()=>import('../components/AddModal.vue'))
const FloatNav = defineAsyncComponent(()=>import('../components/FloatNav.vue'))
const PaginationFooter = defineAsyncComponent(()=>import('../components/PaginationFooter.vue'));


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

const storeRecord = useRecordStore() 

const selectionsRecord = ref([
  {
    name: 'order',
    text: 'orden',
    options: ['asc', 'desc']
  },
  {
      name: 'by',
      text: 'por',
      options: ['nombre', 'id']
  },
])

</script>


<template>
   
   <section class="tranlate-btn-add fixed flex items-end pb-10 z-13">
      <AddModal />
   </section>

  <FloatNav>
      <QueryOptions :store="storeRecord" :selections="selectionsRecord" :busqueda="true" />
  </FloatNav>

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