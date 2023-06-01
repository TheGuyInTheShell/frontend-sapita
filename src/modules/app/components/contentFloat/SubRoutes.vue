<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    routes: Array
})

const handleChangeRoute = (ev)=>{
    const nameRoute = ev.target.id
    console.log(nameRoute);
    useRouter().push({name: nameRoute})
}

</script>

<template> 
    <button @click="handleChangeRoute"  v-for="route in props.routes" :key="route.nombre" :id="route.nombre" class="btn btn-sm mx-5 my-2">{{ route.titulo }}</button>
</template>