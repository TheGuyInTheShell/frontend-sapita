import { lineStructure, colorPallete } from "./structuresCharts"

export default class SuperiorAnual {
    constructor(){}
    getDataAnual(title, options){
        const result = structuredClone(lineStructure)
        result.title = title
        result.labels = this.months
        result.datasets = []
        options.forEach(opt => {
           result.datasets.push(  {
                label: opt.label,
                backgroundColor: colorPallete[opt.colorIndex],
                data: opt.iterable.map(opt.cb)
            })
        })
        return result
    }
} 