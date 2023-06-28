import { dougnutStructure, colorPallete } from "./structuresCharts"

export default class ProcessTotal {
    static type = 'total'
    constructor(){}
    toChartData(data){
        this.content = data.content
        
        const result = structuredClone(dougnutStructure)

        this.content.forEach(el=> {
            result.content.labels.push(el.estado)
            result.content.datasets[0].data.push(el.cantidad)
        })

        result.title = 'Total'
        result.content.datasets[0].backgroundColor = colorPallete.slice(0,4)
        return [
            result
        ]
    }
}