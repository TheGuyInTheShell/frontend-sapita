<script setup>
import { computed } from 'vue'
import useGetData from '../../data/useGetData'
import TableHead from '../../components/TableHead.vue'
import { useRecordStore } from '../../store/record'
import TableData from '../../components/TableData.vue'


const storeRecord = useRecordStore()

const tableRows = computed(() => storeRecord.getData)

const {isLoading, refetch} = useGetData({
    store: storeRecord,
    subRoute: 'tareas'
  })

storeRecord.setRefetchCall(refetch)

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
        <tr class="row" v-for="row in tableRows" :key="row.id">
          <TableData :row="row"/>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <TableHead />
      </tfoot>
    </table>
  </div>
</template>
