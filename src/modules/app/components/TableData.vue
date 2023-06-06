<script setup>
import AddModal from './AddModal.vue'
import { useContextStore } from '../store/context';
const props = defineProps({
    row: {
        type: Object,
        required: true
    }
})

const contextStore = useContextStore()

const handleChangeInputs = ()=>{

    contextStore.setFormConf({
        inputs: [
            {
                text: "nombre",
                name: "nombre",
                type: "fixed"
            },
        ]
    })
   
}
</script>


<template>
    <th>
    <AddModal @showForm="handleChangeInputs" route="tareas" verb="put">
      <p class="text-xl font-bold -translate-y-1">¡</p>
    </AddModal>
  </th>
  <td>
    <section>
      <div class="font-bold">{{ props.row.nombre }}</div>
      <div class="text-sm opacity-50">{{ props.row.id }}</div>
    </section>
  </td>
  <td>
    <p v-if="props.row.trabajador_asignado">
      {{ props.row.trabajador_asignado?.nombre + ' ' + props.row.trabajador_asignado?.apellido }}
    </p>
    <p v-else></p>
  </td>
  <td>{{ props.row.descripcion }}</td>
  <td v-if="props.row.sitio_implementacion.desarrollo === 'interno'">
    <h2 class="text-center">Interno</h2>
  </td>
  <td v-else>
    <div class="tooltip tooltip-info" :data-tip="props.row.sitio?.detalles">
      <button class="btn btn-primary btn-xs">Externo</button>
    </div>
  </td>
</template>