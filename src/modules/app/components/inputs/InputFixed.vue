<script setup>

const props = defineProps({
    input: {
        type: Object,
        required: true
    }
})

</script>


<template>
    <input type="text" :placeholder="props.input?.text" class="input input-bordered font-bold text-xl w-full" disabled />
</template>