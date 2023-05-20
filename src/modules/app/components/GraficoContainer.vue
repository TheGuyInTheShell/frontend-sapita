<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
  
const props = defineProps({
    title: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String,
    },
    data: {
        required: true,
    },
    options: {
        required: true,
    }
})

if (props.type === 'donut') {
    ChartJS.register(ArcElement, Tooltip, Legend)
}


</script>

<template>
    <div>
        <h2 class="text-lg text-center mb-4 font-bold">{{ props.title }}</h2>
        <div v-if="props.data && props.options">
            <Doughnut v-if="props.type === 'donut'" :data="props.data" :options="props.options" />
        </div>
        <div v-else>
            <h3>No data or options</h3>
        </div>
    </div>
</template>