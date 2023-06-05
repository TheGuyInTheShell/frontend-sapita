<script setup>
import {ref} from 'vue'
import AddForm from './AddForm.vue'

const props = defineProps({
    simbol: String,
    customClass : String
})

const closeDialog = ref(null)

</script>
<template>

    <div class="z-14">
            
    <label for="my-modal-3" :class="props.customClass ? props.customClass + ' btn font-bold ' : 'btn font-bold w-18 h-18 rounded-xl'">
        <p class="text-3xl -translate-y-1">{{ props.simbol ? props.simbol : '+' }}</p>
    </label>
            <!-- Put this part before </body> tag -->
    <input ref="closeDialog" type="checkbox" id="my-modal-3" class="modal-toggle" />
    <div class="modal fixed  translate-modal w-screen h-screen">
    <section class="w-full flex justify-center">
        <div class="modal-box relative">
        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <AddForm @close="closeDialog.click()" />
    </div>
    </section>
    </div>

    </div>

</template>

<style scoped>
    .z-14{
        z-index: 14;
    }
</style>