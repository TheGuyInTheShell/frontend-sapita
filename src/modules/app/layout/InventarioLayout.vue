<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { useInventarioStore } from '../store/inventario';

const FloatNav = defineAsyncComponent(()=>import('../components/FloatNav.vue'))
const QueryOptions = defineAsyncComponent(()=>import('../components/contentFloat/QueryOptions.vue'))
const PaginationFooter = defineAsyncComponent(()=>import('../components/PaginationFooter.vue'))

const storeInventario = useInventarioStore()

const selectionsInventario = ref([
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
    {
      name: 'from',
      text: 'desde',
      options: ['todo', 'componentes', 'componentes en uso', 'componentes sin uso']
    }
])

</script>

<template>
   <FloatNav>
      <QueryOptions :store="storeInventario" :selections="selectionsInventario" :busqueda="true" />
  </FloatNav>
  <section class="margin-float min-h-custom flex flex-col gap-6">
    <RouterView />
  </section>
  <PaginationFooter :store="storeInventario" />
</template>
