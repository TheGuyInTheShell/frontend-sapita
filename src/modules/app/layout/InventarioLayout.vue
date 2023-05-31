<script setup>
import FloatNav from '../components/FloatNav.vue'
import PaginationFooter from '../components/PaginationFooter.vue';
import { ref } from 'vue'
import { useInventarioStore } from '../store/inventario';

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
  <FloatNav :store="storeInventario" :selections="selectionsInventario" :busqueda="true" />
  <section class="margin-float flex flex-col gap-6">
    <RouterView />
  </section>
  <PaginationFooter :store="storeInventario" />
</template>
