<script setup>
import {computed} from 'vue'

const props = defineProps({
    storeContext: {
        type: Object,
        required: true,
    }
})

const getPagination = computed(()=> props.storeContext.getPagination)

</script>

<template>
    <footer class=" flex justify-center -translate-x-2 float-layout-w p-4">
    <div class="btn-group">
      <button @click="props.storeContext.setPagination(getPagination - 1)" class="btn">«</button>
      <button class="btn w-96">Page {{ getPagination }}</button>
      <button @click="props.storeContext.setPagination(getPagination + 1)" class="btn">»</button>
    </div>
  </footer>
</template>