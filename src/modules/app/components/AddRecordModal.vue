<script setup>
import AddRecordForm from './AddRecordForm.vue'

</script>
<template>
    <label for="my-modal-3" class="btn">open modal</label>
    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
    <div class="modal pl-10">
    <div class="modal-box relative">
        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <AddRecordForm />
    </div>
    </div>
</template>