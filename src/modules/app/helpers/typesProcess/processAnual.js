import { lineStructure, colorPallete } from "./structuresCharts";

export default class ProcessAnual{
    constructor(){
        this.type = 'anuales'
    }
    #getMonths(init, limit){
        const year = new Date().getFullYear()
        return new Array(limit - init).fill('?').map( () => {
            const month = new Date(year, init).toLocaleString('es-ES', { month: 'long' });
            init += 1
            return month
        })
    }
    #getDataAnual(title, options){
        const result = structuredClone(lineStructure)
        result.title = title
        result.labels = this.months
        result.datasets = []
        options.forEach(opt => {
           result.datasets.push(  {
                label: opt.label,
                backgroundColor: colorPallete[opt.colorIndex],
                data: this.content.map(opt.cb)
            })
        })
        return result
    }
    toChartData(data){
        this.content = data.content
        this.months = this.#getMonths(0, this.content.length)

        const totalAnual = this.#getDataAnual('Total anual',[
            {
                label: 'Realizadas',
                colorIndex: 0,
                cb: (el)=> el["internas_finalizadas"] + el["externas_finalizadas"],
            }
        ])
        const internasVsExternasAnual = this.#getDataAnual('Internas vs externas',[
            {
                label: 'Internas este año',
                colorIndex: 0,
                cb: (el)=> el["internas_finalizadas"],
            },
            {
                label: "Externas este año",
                colorIndex: 2,
                cb: (el)=> el["externas_finalizadas"],
            },
        ])
        return [
            totalAnual,
            internasVsExternasAnual
        ]
    }
}