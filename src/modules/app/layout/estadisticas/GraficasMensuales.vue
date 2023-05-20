<script setup>
import { defineAsyncComponent } from 'vue'

const GraficoContainer = defineAsyncComponent(() => import('../../components/GraficoContainer.vue'))

const dataPackege = [
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
  {
    title: 'Internas vs Externas este mes',
    content: {
      labels: ['Interno', 'Externo'],
      datasets: [
        {
          backgroundColor: ['#41B883', '#DD1B16'],
          data: [32, 15]
        }
      ]
    }
  },
  {
    title: 'Actividades internas',
    content: {
      labels: ['Pendiente', 'Finalizado'],
      datasets: [
        {
          backgroundColor: ['#DD1B16', '#41B883'],
          data: [32, 15]
        }
      ]
    }
  },
  {
    title: 'Actividades externas',
    content: {
      labels: ['Pendiente', 'Finalizado'],
      datasets: [
        {
          backgroundColor: ['#DD1B16', '#41B883'],
          data: [32, 15]
        }
      ]
    }
  }
]

const options = {
  responsive: true,
  maintainAspectRatio: false
}
</script>

<template>
  <div class="bg-white p-5 rounded-sm" v-for="data in dataPackege" :key="data.title">
    <GraficoContainer
      :title="data.title"
      type="donut"
      :data="data.content"
      :options="options"
    />
  </div>

</template>
