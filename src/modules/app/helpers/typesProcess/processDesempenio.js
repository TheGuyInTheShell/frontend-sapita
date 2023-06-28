import SuperiorAnual from "./superiorAnual"
import getMonths from "../getMonths"
import { barStructure, colorPallete } from "./structuresCharts"

export default class ProcessDesempenio extends SuperiorAnual {
    static type = 'desempenio'
    constructor(){
        super() 
        this.months = getMonths(0, 12)
    }
    #getDesempenioIndividual(content){
        const result = structuredClone(barStructure)
        result.datasets[0].label = 'Resultado'
        result.datasets[0].backgroundColor = colorPallete[4]
        content.forEach(trabajador => {
            result.labels.push(`${trabajador.nombre} ${trabajador.apellido}`)
            result.datasets[0].data.push(
                trabajador.data.reduce((acc, curr)=>
                    acc + curr.cantidad
                , 0)
            )
        });

        return result
    }
    toChartData(data){
        const content = data.content
        const desempenioAnualTrabajadores = this.getDataAnual('Desempeño anual de trabajadores',
                content.map((trabajador, ind) =>{
                    return {
                        label: `${trabajador.nombre} ${trabajador.apellido}`,
                        colorIndex: ind,
                        iterable: trabajador.data,
                        cb: (el)=> el["cantidad"],
                    }
                })                
            )

        const totalIndividual = this.#getDesempenioIndividual(content)
        return [
            desempenioAnualTrabajadores,
            totalIndividual,
        ]
    }
}