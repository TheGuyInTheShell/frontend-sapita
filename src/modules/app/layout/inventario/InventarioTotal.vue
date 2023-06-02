<script setup>
import  { computed, defineAsyncComponent } from 'vue'
import { useInventarioStore } from '../../store/inventario';
import useGetData from '../../data/useGetData';

const storeInventario = useInventarioStore()

const ItemInventario = defineAsyncComponent(()=> import('../../components/ItemInventario.vue'))

const itemsInventario = computed(()=> storeInventario.getData)

const {isLoading} = useGetData({
    store: storeInventario,
    subRoute: 'inventario'
  })

</script>

<template>
        <div v-if="isLoading"><h1>Cargando....</h1></div>
        <div v-else v-for="item in itemsInventario" :key="item.nombre">
                <ItemInventario :index="item.id"  :nombre="item.nombre" :tipo="item.tipo" :descripcion="item.descripcion" />
        </div>

</template>