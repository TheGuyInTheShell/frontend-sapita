<script setup>
    import ContainerLogin from '../components/ContainerLogin.vue'
</script>

<template>
    
   <ContainerLogin>        
       <Suspense>
        <RouterView />
       </Suspense>
   </ContainerLogin>

</template>