<script setup>
import  { computed, defineAsyncComponent } from 'vue'
import { useInventarioStore } from '../../store/inventario';
import useGetData from '../../data/useGetData';

const inventarioStore = useInventarioStore()

const ItemInventario = defineAsyncComponent(()=> import('../../components/ItemInventario.vue'))

const itemsInventario = computed(()=> inventarioStore.getData)

const {isLoading, refetch} = useGetData({
    store: inventarioStore,
    subRoute: 'inventario'
  })

inventarioStore.setRefetchCall(refetch)

</script>

<template>
        <div v-if="isLoading"><h1>Cargando....</h1></div>
        <div v-else v-for="item in itemsInventario" :key="item.id">
                <ItemInventario :index="item.id"  :nombre="item.nombre" :tipo_id="`${item.tipo_id}`" :descripcion="item.descripcion" />
        </div>

</template>
