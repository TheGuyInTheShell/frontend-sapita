<script setup>
    import FormLogin from '../components/FormLogin.vue';
    import AlcaldiaLogo from '../components/AlcaldiaLogo.vue'
</script>

<template>
    
    <main class="flex justify-center items-center w-screen h-screen p-8 bg-slate-300">
        <section class="flex w-full h-full justify-center gap-8 bg-white rounded-md">
    
            <AlcaldiaLogo />

            <FormLogin />

        </section>
    </main>

</template>