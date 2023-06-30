<script setup>
import { computed, onBeforeMount, onBeforeUnmount, ref, unref, reactive } from 'vue'
import { useReportesStore } from '../../store/reportes'
import { useReporteFormStore } from '../../store/reporteForm'
import {useAlertStore} from '@/shared/store/alerts.js'
import { apiBase } from '../../api/useApi';
import TableInventario from '../../components/TableInventario.vue';
import BadgeComponentes from '../../components/BadgeComponentes.vue';
import InputSelect from '../../components/inputs/InputSelect.vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const reporteFormStore = useReporteFormStore()
const reportesStore = useReportesStore()
const collapseSection = ref(null)
const alertsStore = useAlertStore()

const stockComponents = computed(()=> [
    ...reporteFormStore.getStockComponets
    ].map(
        ([key, value]) => ({
            id: key,
            ...value
        })
    ))

const saveComponet = computed(()=>[
    ...reporteFormStore.getSaveComponets
    ].map(
        ([key, value]) => ({
            deletable: true,
            info: `${value.nombre}, ${value?.serial}`,
            text: key,
            key
        })
    )) 

const selectionData = reactive({
    name: 'tarea_id',
    text: 'Selecionar tarea',
    options: []
})

onBeforeMount(async () => {
    reportesStore.swapShow()
    await apiBase.get('componentes/desuso')
        .then(res => reporteFormStore.setStockComponets(res.data.content))
        .catch(console.log)
    await apiBase.get('tareas/realizandose/reportes')
        .then(res => selectionData.options = res.data.content.map(opt => `${opt.id}: ${opt.nombre}`)
        )
        .catch(console.log)
      if (!selectionData.options[0]) {
        router.push({name: 'reportes-display'})
      }
})

onBeforeUnmount(() => {
  reportesStore.swapShow()
})

const handleToggle = ()=>{
    const target = unref(collapseSection)
    if (target.classList.contains('collapse-open')) {
        target.classList.remove("collapse-open")
        target.classList.add("collapse-close")
    }
    if (target.classList.contains('collapse-close')) {
        target.classList.remove("collapse-close")
        target.classList.add("collapse-open")
    }
     
}

const handleAdd = (id)=>{
    reporteFormStore.toSaveComponets(id)
}

const handleDelete = (id)=>{
    reporteFormStore.toStockComponents(id)
}

const handleSendForm = (ev)=>{
    ev.preventDefault()
    apiBase.post('reportes', reporteFormStore.toJsonData(
        document.getElementById('message').value,
        document.getElementById('tarea_id').value
    )).then(res =>{ 
      if(res.statusText === 'OK'){
        alertsStore.setAlertConfig({
          message: 'Reporte Añadido',
          type: 'success'
        })
        reportesStore.getRefetchCall()
        router.push({name: 'reportes-display'})
      } 
  }).catch(console.log)
}

</script>

<template>
  <fieldset class="bg-white p-4 rounded-md">
    <form class="space-y-4">

      <section
        ref="collapseSection"
        @click="handleToggle"
        class="collapse collapse-close border border-base-300 bg-base-200 rounded-md"
      >
        <div class="collapse-title text-xl font-medium">Componentes</div>
        <div class="collapse-content">
          <section class="w-full h-full">
            <div class="flex flex-wrap gap-2 py-8 px-4 h-20 border border-gray-300 overflow-y-auto">
                <BadgeComponentes @delete="handleDelete" v-if="saveComponet" :badges="saveComponet" />
            </div>
                <TableInventario @add="handleAdd" :components="stockComponents" />
          </section>
        </div>
      </section>

      <section v-if="selectionData.options[0]">
        <InputSelect class="w-full" :selection="selectionData" />
      </section>

      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Descripcion</label
      >
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Aqui!"
      ></textarea>
      <div>
        <button @click="handleSendForm" class="btn btn-block btn-info">Guardar</button>
      </div>
    </form>
  </fieldset>
</template>
