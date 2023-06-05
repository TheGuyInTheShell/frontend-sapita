<script setup>
import { computed } from 'vue'
import useGetData from '../../data/useGetData'
import TableHead from '../../components/TableHead.vue'
import { useRecordStore } from '../../store/record'
import AddModal from '../../components/AddModal.vue'

const storeRecord = useRecordStore()

const tableRows = computed(() => storeRecord.getData)

const {isLoading} = useGetData({
    store: storeRecord,
    subRoute: 'tareas'
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
        <!-- row -->
        <tr class="row" v-for="row in tableRows" :key="row.nombre + row.id">
          <th>
            <AddModal :simbol="'¡'" :custom-class="'rounded-full w-12 h-12 font-semibold'"/>
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
          <td>
              <p>
              {{ row.descripcion }}
              </p>
          </td>
          <td v-if="row.sitio_implementacion?.desarrollo === 'interno'">
            <h2 class="text-center">Interno</h2>
          </td>
          <td v-else>
            <div class="tooltip tooltip-info" :data-tip="row.sitio_implementacion?.detalles">
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
