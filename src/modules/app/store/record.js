import { defineStore } from 'pinia'
import dataUtil from './dataUtil'

export const useRecordStore = defineStore('record', dataUtil)