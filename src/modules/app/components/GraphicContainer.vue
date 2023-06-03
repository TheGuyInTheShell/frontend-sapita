<script setup>
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
} from 'chart.js'
import { Doughnut, Line } from 'vue-chartjs'

const props = defineProps({
  title: {
    required: true,
    type: String
  },
  type: {
    required: true,
    type: String
  },
  data: {
    required: true
  },
  options: {
    required: true
  }
})

if (props.type === 'doughnut') {
  ChartJS.register(ArcElement, Tooltip, Legend)
}
if (props.type === 'line') {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
}
</script>

<template>
  <div>
    <h2 class="text-lg text-center mb-4 font-bold">{{ props.title }}</h2>
    <div v-if="props.data && props.options">
      <Doughnut v-if="props.type === 'doughnut'" :data="props.data.content" :options="props.options" />
      <Line v-if="props.type === 'line'" :data="props.data" :options="props.options" />
    </div>
    <div v-else>
      <h3>No data or options</h3>
    </div>
  </div>
</template>
