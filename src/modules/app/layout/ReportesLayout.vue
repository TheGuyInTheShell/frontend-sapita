<script setup>
import FloatNav from '../components/FloatNav.vue'
import QueryOptions from '../components/contentFloat/QueryOptions.vue';
import PaginationFooter from '../components/PaginationFooter.vue';
import { useReportesStore } from '../store/reportes';
import { useContextStore } from '../store/context';

const storeContext = useContextStore()

const storeReportes = useReportesStore()

const selectionsRecord = storeContext.getRecordOptionsSearch

</script>


<template>

  <FloatNav>
      <QueryOptions :store="storeReportes" :selections="selectionsRecord" :busqueda="true" />
  </FloatNav>

  <section class="margin-float min-h-custom pr-1">
    <RouterView />
  </section>

  <PaginationFooter :store="storeReportes" />
</template>