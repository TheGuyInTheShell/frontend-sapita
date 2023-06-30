<script setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { useInventarioStore } from '../store/inventario';
import { useContextStore } from '../store/context';
import { apiBase } from '../api/useApi';
import AddModal from '../components/AddModal.vue';
const FloatNav = defineAsyncComponent(()=>import('../components/FloatNav.vue'))
const QueryOptions = defineAsyncComponent(()=>import('../components/contentFloat/QueryOptions.vue'))
const PaginationFooter = defineAsyncComponent(()=>import('../components/PaginationFooter.vue'))

const contextStore = useContextStore()
const inventarioStore = useInventarioStore()

onMounted(()=>{
  inventarioStore.resetQuery()
})

const selectionsInventario = ref([
    {
    name: 'order',
    text: 'orden',
    options: ['asc', 'desc']
    },
    {
      name: 'by',
      text: 'por',
      options: ['nombre', 'id']
    },
    {
      name: 'from',
      text: 'desde',
      options: ['todo', 'componentes', 'componentes en uso', 'componentes sin uso']
    }
])

const handleInputsAddInventario = async ()=>{

  const fromDataOptions = await apiBase.get('inventario/opciones')
  const optionsForm = fromDataOptions.data.content
  contextStore.setFormConf({
               inputs: [
                 {
                   text: "tipo",
                   name: "tipo",
                   type: "select",
                   options: optionsForm.tipos_inventario.map(el => `${el.id}: ${el.nombre}`)
                 },
                {
                  text: "codigo",
                  name: "codigo",
                  type: "select",
                  options: optionsForm.codigos_inventario.map(el => `${el.id}: ${el.nombre}`)
                },
               {
                 text: "nombre",
                 name: "nombre",
                 type: "text"
               },
               {
                 text: "descripcion",
                 name: "descripcion",
                 type: "text"
               },
              {
                 text: "serial",
                 name: "serial",
                 type: "text"
               },
               {
                 text: "marca",
                 name: "marca",
                 type: "text"
               },
               {
                 text: "modelo",
                 name: "modelo",
                 type: "text"
               },
               {
                 text: "encargado",
                 name: "encargado",
                 type: "text",
               },
               {
                 text: "departamento",
                 name: "departamento",
                 type: "text",
               },

             ],
               verb: "post",
               route: "inventario",
               refetch:  inventarioStore.getRefetchCall,
               deletable: false,
               saveable: true
             })
}

</script>

<template>

   <section class="tranlate-btn-add fixed flex items-end pb-10 z-13">
      <AddModal @showForm="handleInputsAddInventario">
        <p class="text-xl font-bold">+</p>
      </AddModal>
   </section>

   <FloatNav>
      <QueryOptions :store="inventarioStore" :selections="selectionsInventario" :busqueda="true" />
  </FloatNav>
  <section class="margin-float min-h-custom flex flex-col gap-6">
    <RouterView />
  </section>
  <PaginationFooter :store="inventarioStore" />
</template>

<style scoped>

.z-13{
  z-index: 13;
}

</style>
