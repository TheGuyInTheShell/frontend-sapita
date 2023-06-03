<script setup>
import { defineAsyncComponent, computed } from 'vue'
import {useRoute} from 'vue-router'
import useGetEstadisticas from '../../data/useGetEstadisticas';
const GraphicContainer = defineAsyncComponent(() => import('../../components/GraphicContainer.vue'))


const route = useRoute()
const hash = computed(()=> route.hash)
const {dataPackage, isLoading, isError} = useGetEstadisticas( hash )

const options = {
  responsive: true,
  maintainAspectRatio: false
}
</script>

<template>
  <section v-if="!isLoading && !isError">
    <div class="bg-white p-5 rounded-sm my-4" v-for="data in dataPackage" :key="data.title">
      <GraphicContainer
      :title="data.title"
      :type="data.type"
      :data="data"
      :options="options"
      />
    </div>
  </section>
  <div v-else>
    <h1>error</h1>
  </div>

</template>
