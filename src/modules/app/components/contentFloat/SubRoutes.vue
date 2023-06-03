<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
    routes: Array
})

const handleChangeRoute = (ev)=>{
    const hashRoute = ev.target.id
    router.push({name: 'estadisticas-display', hash: hashRoute})
}

</script>

<template> 
    <button @click="handleChangeRoute"  v-for="route in props.routes" :key="route.hash" :id="route.hash" class="btn btn-sm mx-5 my-2">{{ route.titulo }}</button>
</template>