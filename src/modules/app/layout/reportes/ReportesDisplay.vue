<script setup>
import ItemReporte from '../../components/ItemReporte.vue';
import {useReportesStore} from '../../store/reportes'
import useGetData from '../../data/useGetData';
import { computed } from 'vue';

const reportesStore = useReportesStore()

const itemsReportes = computed(()=> reportesStore.getData)

const {isLoading, refetch} = useGetData({
    store: reportesStore,
    subRoute: 'reportes'
  })

reportesStore.setRefetchCall(refetch)

</script>


<template>

  <section v-if="isLoading">
    <h1>cargando...</h1>
  </section>

  <section v-else v-for="item in itemsReportes" :key="item.id" >
    <ItemReporte 
    :descripcion="item.reporte_descripcion"
    :estado="item.estado" 
    :reporte-id="item.id" 
    :tarea-id="item.tarea_id"
    :components-used="item.componentes_usados"
    />
  </section>
  
</template>


<style>

.btn-to{
    transform: translate(calc(100vw - 5rem), calc(80vh - 13rem));
}

@media (min-width: 638px){
  
    .btn-to{
        transform: translate(calc(100vw - 22rem), calc(75vh - 10rem));
    }

  }
   

</style>