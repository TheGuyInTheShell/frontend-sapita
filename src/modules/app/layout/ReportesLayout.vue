<script setup>
import { computed, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router';
import FloatNav from '../components/FloatNav.vue'
import QueryOptions from '../components/contentFloat/QueryOptions.vue';
import PaginationFooter from '../components/PaginationFooter.vue';
import { useReportesStore } from '../store/reportes';
import { useContextStore } from '../store/context';

const contextStore = useContextStore()

const reportesStore = useReportesStore()

onBeforeMount(()=>{
  reportesStore.resetQuery()
})

const selectionsRecord = [
      {
        name: 'from',
        text: 'desde',
        options: ['todos','pendientes', 'aprobados']
      },
  ...contextStore.getRecordOptionsSearch.slice(1,3)
]

const showNavigations = computed(()=>reportesStore.getShow)

const route = useRouter()

const handleToFormAddReport = ()=>{
  route.push({name: 'reportes-agg'})
}

</script>


<template>

<section v-show="showNavigations" class="tranlate-btn-add fixed flex items-end pb-10 z-13">
      <button :onclick="handleToFormAddReport" class="btn">
        <p class="text-xl font-bold">+</p>
      </button>
   </section>

  <FloatNav v-show="showNavigations">
      <QueryOptions :store="reportesStore" :selections="selectionsRecord" />
  </FloatNav>

  <section class="margin-float min-h-custom pr-1">
    <RouterView />
  </section>

  <PaginationFooter v-show="showNavigations" :store="reportesStore" />
</template>