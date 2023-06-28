<script setup>
import { computed } from 'vue';


const events = defineEmits(['add'])

const props = defineProps({
    components: {
        type: Array,
        required: true
    }
})

const components = computed(()=> props.components)

const handleAddComponent = (id)=>{
    events('add', id)
}

</script>

<template>
    <div class="border border-gray-300 h-max-custom overflow-y-auto">
              <div class="overflow-x-auto">
                <table class="table m-0 w-full">
                  <!-- head -->
                  <thead>
                    <tr>
                      <th></th>
                      <th>Nombre</th>
                      <th>Serial</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr v-for="component in components" :key="component.id">
                        <th>{{ component?.id || 'N/A'}}</th>
                        <td>{{ component?.nombre || 'N/A' }}</td>
                        <td>{{ component?.serial || 'N/A' }}</td>
                        <td>
                            <button @click="(ev)=> {
                                ev.preventDefault()
                                handleAddComponent(component?.id)
                                }" class="btn btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </button>
                        </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
</template>

<style>
    .h-max-custom{
        max-height: 35vh;
    }
</style>