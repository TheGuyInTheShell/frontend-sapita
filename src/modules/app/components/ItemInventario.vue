<script setup>

const props = defineProps({
    tipo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    index: {
        type: Number,
        required: true
    }
})

</script>

<template>
    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div class="collapse-title flex items-center justify-between">
            <div>
                <h3 class="text-xl font-medium">{{ props.nombre }}</h3>
                <pre>{{ props.index + 1 }}</pre>
            </div>
            <h4 class="text-lg">{{ props.tipo }}</h4>
        </div>
        <article class="collapse-content">
            <p>{{ props.descripcion }}</p>
        </article>
    </div>
</template>