<script setup>

const props = defineProps({
    input: {
        type: Object,
        required: true
    }
})

</script>


<template>
    <input type="text" :data="props.input?.text" :id="props.input?.name" :placeholder="props.input?.name + ': ' + props.input?.text" class="input input-bordered font-bold text-xl w-full" disabled />
</template>

<style>
    .input[disabled]{
        color: black;
        text-shadow: 0 0 rgba(13, 13, 13, 0.744);
    }
</style>