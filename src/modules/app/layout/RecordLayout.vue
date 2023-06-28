<script setup>
import { defineAsyncComponent, onMounted } from 'vue';
import { useRecordStore } from '../store/record';
import QueryOptions from '../components/contentFloat/QueryOptions.vue';
import { useContextStore } from '../store/context';

const AddModal = defineAsyncComponent(()=>import('../components/AddModal.vue'))
const FloatNav = defineAsyncComponent(()=>import('../components/FloatNav.vue'))
const PaginationFooter = defineAsyncComponent(()=>import('../components/PaginationFooter.vue'));

const contextStore = useContextStore()

const recordStore = useRecordStore() 

onMounted(()=>{
  recordStore.resetQuery()
})

const selectionsRecord = contextStore.getRecordOptionsSearch

const handleInputsAddRecord = ()=>{
  contextStore.setFormConf({
               inputs: [
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
             ],
               verb: "post",
               route: "tareas",
               saveable: true
             })
}

</script>


<template>
   
   <section class="tranlate-btn-add fixed flex items-end pb-10 z-13">
      <AddModal @showForm="handleInputsAddRecord">
        <p class="text-xl font-bold">+</p>
      </AddModal>
   </section>

  <FloatNav>
      <QueryOptions :store="recordStore" :selections="selectionsRecord" :busqueda="true" />
  </FloatNav>

  <section class="margin-float min-h-custom">
    <RouterView />
  </section>

  <PaginationFooter :store="recordStore" />
   
</template>


<style>
  .table-container{
    height: 10%;
  }
   .z-13{
      z-index: 13;
   }
</style>