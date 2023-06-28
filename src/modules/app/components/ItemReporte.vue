<script setup>
import { computed, defineAsyncComponent, reactive, } from 'vue';
import { apiBase } from '../api/useApi';
import SpinnerLoader from './SpinnerLoader.vue'
import { useContextStore } from '../store/context'

const contextStore = useContextStore()

const BadgeComponentes = defineAsyncComponent(()=> import('./BadgeComponentes.vue'))

const props = defineProps({
    descripcion: {
        type: String,
        required: true,
    },
    reporteId: {
        type: Number
    },
    tareaId: {
        type: Number,
    },
    estado: {
        type: String
    },
    componentsUsed: {
        type: Array,
    }
})
const checkeable = (contextStore.getUserType === 'render_admin' && props.estado === 'pendiente')

const badges = computed(()=> props.componentsUsed.reduce((acc, el)=>[
        {
            info: `${el.nombre} ${el.serial}`,
            text: el.id,
            key: el.id
        }
    ], []))

const tareaData = reactive({
    nombre: '',
    descripcion: ''
})

const handleTareaInfo = ()=>{
    if (!tareaData.nombre && !tareaData.descripcion) {
        const retryInterval = setInterval(async ()=>{
            try {
                const {data} = await apiBase.get(`tareas/${props.tareaId}`)
                const content = data.content[0]
                tareaData.nombre = content?.nombre
                tareaData.descripcion = content?.descripcion   
            } catch (error) {
                console.error(error)
            }
            clearInterval(retryInterval)
        }, 1000)
    }
}

const handleAprove = async ()=>{
    await apiBase.put(`reportes/${props.reporteId}`)
}

</script>

<template>
    <section class="bg-white h-full rounded-md w-full mt-10">
        <div class="p-4 flex flex-col gap-2">
            <section class="grid grid-flow-col gap-2 justify-between">
        
        <div v-if="props?.componentsUsed" class="col-span-12 p-2 border-gray-300 border rounded-md flex gap-2 items-center">
          <p class="font-bold text-xl -translate-y-0.5">Componentes Usados:</p>
          <BadgeComponentes :badges="badges" />
        </div>

        <div class="dropdown dropdown-hover" :class="badges ? 'dropdown-left' : 'dropdown-right' ">
            <label @mouseover="handleTareaInfo" tabindex="0" class="btn m-1">Tarea</label>
            <section tabindex="0" class="card compact dropdown-content shadow bg-base-100 rounded-box w-64">
              <div v-if="!tareaData.nombre && !tareaData.descripcion" class="flex justify-center items-center p-4 h-12">
                <SpinnerLoader />
              </div>
              <div v-else class="card-body">
                <h2 class="card-title">{{ tareaData.nombre }}</h2> 
                <p>{{ tareaData.descripcion }}</p>
              </div>
            </section>
        </div>

        </section>
        <article class="border-gray-300 border rounded-md p-2">
            <h2 class="font-bold text-xl">Descripcion:</h2>
            <p>
            {{ props.descripcion }}
            </p>
            <div class="flex flex-row mt-2 items-center justify-between">
                <p :class="props.estado === 'pendiente' ? 'text-red-400' : 'text-green-400' ">
                {{ props.estado }}
            </p>
            <button v-if="checkeable" @click="handleAprove" 
            class="btn btn-info">
                Aprobar
            </button>
            </div>
        </article>
        </div>
    </section>
</template>