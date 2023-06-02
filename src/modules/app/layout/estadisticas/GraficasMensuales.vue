<script setup>
import { defineAsyncComponent } from 'vue'

const GraficoContainer = defineAsyncComponent(() => import('../../components/GraficoContainer.vue'))

const dataPackage = [
  {
    title: 'Actividades mensules',
    content: {
      labels: ['Finalizadas', 'Pendientes'],
      datasets: [
        {
          backgroundColor: ['#41B883', '#DD1B16'],
          data: [80, 20]
        }
      ]
    }
  },
]

const options = {
  responsive: true,
  maintainAspectRatio: false
}
</script>

<template>
  <div class="bg-white p-5 rounded-sm" v-for="data in dataPackage" :key="data.title">
    <GraficoContainer
      :title="data.title"
      type="donut"
      :data="data.content"
      :options="options"
    />
  </div>

</template>
