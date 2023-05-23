<script setup>
import  {defineAsyncComponent} from 'vue'

const ItemInventario = defineAsyncComponent(()=> import('../../components/ItemInventario.vue'))

const itemsInventario = [
  {
    "nombre": "laboris",
    "tipo": "officia",
    "descripcion": "aliqua"
  },
  {
    "nombre": "ex",
    "tipo": "commodo",
    "descripcion": "occaecat"
  },
  {
    "nombre": "sit",
    "tipo": "occaecat",
    "descripcion": "excepteur"
  },
  {
    "nombre": "quis",
    "tipo": "cillum",
    "descripcion": "ea"
  },
  {
    "nombre": "ex",
    "tipo": "exercitation",
    "descripcion": "ipsum"
  },
  {
    "nombre": "officia",
    "tipo": "non",
    "descripcion": "sit"
  },
  {
    "nombre": "do",
    "tipo": "officia",
    "descripcion": "magna"
  },
  {
    "nombre": "nulla",
    "tipo": "enim",
    "descripcion": "deserunt"
  },
  {
    "nombre": "non",
    "tipo": "aliquip",
    "descripcion": "occaecat"
  },
  {
    "nombre": "officia",
    "tipo": "dolore",
    "descripcion": "nisi"
  },
  {
    "nombre": "culpa",
    "tipo": "eiusmod",
    "descripcion": "eu"
  },
  {
    "nombre": "velit",
    "tipo": "fugiat",
    "descripcion": "consequat"
  },
  {
    "nombre": "id",
    "tipo": "deserunt",
    "descripcion": "ipsum"
  },
  {
    "nombre": "in",
    "tipo": "laborum",
    "descripcion": "in"
  },
  {
    "nombre": "ex",
    "tipo": "tempor",
    "descripcion": "ad"
  },
  {
    "nombre": "ullamco",
    "tipo": "ex",
    "descripcion": "velit"
  },
  {
    "nombre": "exercitation",
    "tipo": "tempor",
    "descripcion": "laborum"
  },
  {
    "nombre": "irure",
    "tipo": "veniam",
    "descripcion": "nisi"
  },
  {
    "nombre": "quis",
    "tipo": "aliquip",
    "descripcion": "elit"
  },
  {
    "nombre": "quis2",
    "tipo": "aliquip",
    "descripcion": "elit"
  },
  {
    "nombre": "quis3",
    "tipo": "aliquip",
    "descripcion": "elit"
  },
  {
    "nombre": "quis4",
    "tipo": "aliquip",
    "descripcion": "elit"
  },
  {
    "nombre": "quis5",
    "tipo": "aliquip",
    "descripcion": "elit"
  },
  {
    "nombre": "quis6",
    "tipo": "aliquip",
    "descripcion": "elit"
  }
]

</script>

<template>

        <div v-for="item in itemsInventario" :key="item.nombre">
                <ItemInventario  :nombre="item.nombre" :tipo="item.tipo" :descripcion="item.descripcion" />
        </div>

</template>