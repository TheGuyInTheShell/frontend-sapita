<script setup>


const props = defineProps({
    selection: {
      name:{
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        required: true
      }
    }
})



</script>

<template>
  <select :id="props.selection.name" class="select select-info mt-3 w-full">
    <option disabled selected>{{ props.selection.text }}</option>
    <option v-for="option in props.selection.options" :key="option">{{ option }}</option>
  </select>
</template>
