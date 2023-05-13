<script setup>
import { ref } from 'vue';
import TableHead from '../components/TableHead.vue';
import AddRecordModal from '../components/AddRecordModal.vue'
const tableRows = ref([
    {
        id: '', // uuid
        estado: '', // enum
        nombre: 'Arreglar el pais', // varchar
        descripcion: '', // text
        trabajador: 'Elieser Alvarez', // {nombre, apellido} 
        asignado: new Date().toISOString(), // date
        iniciado: new Date().toISOString(), // date
        finalizado: '', // date
        sitio: {
          desarrollo: 'interno', // enum
          detalles: '' // text
        },
    },
    {
        id: '',
        estado: '',
        nombre: 'Matar a maduro',
        trabajador: 'Omarleen Perez',
        asignado: new Date().toISOString(),
        iniciado: new Date().toISOString(),
        finalizado: '',
        sitio: {
          desarrollo: 'externo',
          detalles: 'policia municipal - administracion'
        },
    },

])

</script>


<template>
   
   <AddRecordModal />

  <section class="overflow-x-auto h-full">
  <table class="table w-full">
    <!-- head -->
    <thead>
        <TableHead />
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr v-for="row in tableRows" :key="row.nombre">
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
            <section>
              <div class="font-bold">{{ row.nombre }}</div>
              <div class="text-sm opacity-50">382yr7783f2074</div>
            </section>
        </td>
        <td>
            {{ row.trabajador }}
        </td>
        <td>{{ row.iniciado }}</td>
        <td>{{ row.asignado }}</td>
        <td v-if="row.sitio.desarrollo === 'interno'">
            <h2 class="text-center">Interno</h2>
        </td>
        <td v-else>
            <div  class="tooltip tooltip-info " :data-tip="row.sitio.detalles">
            <button class="btn btn-primary btn-xs">Externo</button>
          </div>
        </td>
      </tr>
    </tbody>
    <!-- foot -->
    <tfoot>
        <TableHead />
    </tfoot>
    
  </table>
</section>
</template>