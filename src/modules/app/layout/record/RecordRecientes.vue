<script setup>
import { computed } from 'vue';
import useGetData from '../../data/useGetData'
import TableHead from '../../components/TableHead.vue';
import {useRecordStore} from '../../store/record'

const storeRecord = useRecordStore() 

const tableRows = computed(()=> storeRecord.getRecord) 

const {isLoading} = useGetData({
  store: storeRecord,
  subRoute: 'tareas',
  parameter: ''
})

</script>


<template> 
  <div v-if="isLoading && !tableRows">isLoading....</div>
  <div v-else class="overflow-x-auto table-container">
  <table class="table w-full">
    <!-- head -->
    <thead>
        <TableHead />
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr class="row" v-for="row in tableRows" :key="row.nombre + row.id">
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
            <section>
              <div class="font-bold">{{ row.nombre }}</div>
              <div class="text-sm opacity-50">{{ row.id }}</div>
            </section>
        </td>
        <td>
            {{ row.trabajador_asignado.nombre + ' ' + row.trabajador_asignado.apellido }}
        </td>
        <td>{{ row.asignado }}</td>
        <td>{{ row.iniciado }}</td>
        <td v-if="row.sitio_implementacion.desarrollo === 'interno'">
            <h2 class="text-center">Interno</h2>
        </td>
        <td v-else>
            <div  class="tooltip tooltip-info" :data-tip="row.sitio.detalles">
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
</div>
</template>