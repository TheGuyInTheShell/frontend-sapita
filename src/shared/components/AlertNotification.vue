<script setup>
    const props = defineProps({
        alertConfig: {
            type: Object,
            required: true,
        }
    })

</script>


<template>
    
    <section class="h-screen flex items-end justify-end p-4 z-50">
        <div :class="`alert alert-${props.alertConfig.type} shadow-lg fixed w-80`">
        <div>
            <span>{{ props.alertConfig.message }}</span>
        </div>
        </div>
    </section>

</template>