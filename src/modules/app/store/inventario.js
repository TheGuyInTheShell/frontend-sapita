import { defineStore } from 'pinia'
import dataUtil from './dataUtil'

export const useInventarioStore = defineStore('inventario', dataUtil)
