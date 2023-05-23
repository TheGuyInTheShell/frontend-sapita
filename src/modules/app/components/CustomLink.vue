<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
    const classes = {
        current: "flex items-center p-2 rounded-lg text-gray-300 dark:text-white dark:bg-slate-900 hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700",
        active: "flex items-center p-2 rounded-lg cursor-default bg-gray-100 text-gray-800 dark:text-white dark:bg-gray-700",
    }   
    const props = defineProps({
        seccion: {
            type: Object,
            required: true,
        },
    })
    const isHttp = ref(false)
    if (props.seccion?.link.ruta || false) {
        isHttp.value = props.seccion.link.ruta.startsWith('http')
    }
</script>

<template>
    <a
    :class="classes.current" 
    v-if="isHttp" 
    target="_blank"
    :href="props.seccion.link.ruta"
    >
        {{ props.seccion.titulo }}
    </a>
    <RouterLink
    v-else
    v-slot="{ href, isActive }"
    :to="{ name: props.seccion.link.nombre}"
    >
       <a 
       :href="href" 
       :class="isActive ? classes.active : classes.current"
       >
               <img :src=" '/assets/icons/dashboard/' + props.seccion.icono + '.svg' " alt="icon">
               <span class="ml-3">{{ props.seccion.titulo }}</span>
        </a>
    </RouterLink>
</template> 
