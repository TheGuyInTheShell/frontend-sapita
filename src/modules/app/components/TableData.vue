<script setup>
import AddModal from './AddModal.vue'
import { useContextStore } from '../store/context';
import { computed } from 'vue';
const props = defineProps({
    row: {
        type: Object,
        required: true
    }
})

const row = computed(()=> props.row)

const contextStore = useContextStore()

const handleChangeInputs = ()=>{

    const forInputs = Object.keys(row.value).reduce((acc, key)=>{
        if (key === 'trabajador_asignado') {
              if (row.value[key]) {
                return [
              ...acc,
                  {
                    text: row.value[key].nombre + ' ' + row.value[key].apellido,
                    name: key.replace("_", " ").replace(/^\w/, (c) => c.toUpperCase()),
                    type: "fixed"
                  }
                ]
            }else{
              return [
                ...acc,
                {
                  text: "Trabajador (?)",
                  name: "trabajador_select",
                  type: "select",
                  options: contextStore.getTrabajadores.map(trabajador => `${trabajador.nombre}-${trabajador.id}` )
                },
              ]
            }
        }
        if (key === "sitio_implementacion" || key === "iniciado") {
          return acc
        }
        return [
              ...acc,
                  {
                    text: row.value[key],
                    name: key.replace(/^\w/, (c) => c.toUpperCase()),
                    type: "fixed"
                  }
                ]

    }, [])


    contextStore.setFormConf({
        inputs: forInputs,
        route: 'tareas/asignar',
        verb: 'put',
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
      <div class="font-bold">{{ row.nombre }}</div>
      <div class="text-sm opacity-50">{{ row.id }}</div>
    </section>
  </td>
  <td>
    <p v-if="row.trabajador_asignado">
      {{ row.trabajador_asignado?.nombre + ' ' + row.trabajador_asignado?.apellido }}
    </p>
    <p v-else></p>
  </td>
  <td>{{ row.descripcion }}</td>
  <td v-if="row.sitio_implementacion.desarrollo === 'interno'">
    <h2 class="text-center">Interno</h2>
  </td>
  <td v-else>
    <div class="tooltip tooltip-info" :data-tip="row.sitio?.detalles">
      <button class="btn btn-primary btn-xs">Externo</button>
    </div>
  </td>
</template>