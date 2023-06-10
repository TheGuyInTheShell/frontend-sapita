import { lineStructure, colorPallete } from "./structuresCharts"

export default class SuperiorAnual {
    constructor(){}
    getArrayProcesed(options){
        return options.map(opt => 
            ({
                 label: opt.label,
                 backgroundColor: colorPallete[opt.colorIndex],
                 data: opt.iterable.map(opt.cb)
             })
         )
    }
    getDataAnual(title, options){
        const result = structuredClone(lineStructure)
        result.title = title
        result.labels = this.months
        result.datasets = this.getArrayProcesed(options)
        return result
    }
} 