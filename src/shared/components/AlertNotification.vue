<script setup>
    const props = defineProps({
        alertConfig: {
            type: Object,
            required: true,
        }
    })

</script>


<template>
    
    <section class="h-screen flex items-end justify-center p-4">
        <div :class="`alert alert-${props.alertConfig.type} shadow-lg fixed z-20 w-96`">
        <div>
            <span>{{ props.alertConfig.message }}</span>
        </div>
        </div>
    </section>

</template>