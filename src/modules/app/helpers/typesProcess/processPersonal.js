import SuperiorAnual from "./superiorAnual";
import getMonths from '../getMonths'
import { colorPallete, dougnutStructure } from "./structuresCharts";

export default class ProcessPersonal extends SuperiorAnual {
    static type = 'personal'
    constructor(){
        super()
        this.months = getMonths(0, 12)
    }
    getPersonalFinRea(content){
        const result = structuredClone(dougnutStructure)
        result.title = 'Total de tareas personal'
        result.content.labels = ['realizando', 'finalizadas']
        result.content.datasets[0].data = content.reduce((acc, curr)=>{
            const [realizandoseTotal, finalizadasTotal] = acc
            return [
                realizandoseTotal + (+curr.realizadose),
                finalizadasTotal + (+curr.finalizadas),
            ]
        }, [0,0])
        result.content.datasets[0].backgroundColor = [colorPallete[1], colorPallete[0]]
        return result
    }
    toChartData(data){
        const content = data.content

        const personalFinRea =  this.getPersonalFinRea(content)

        const personalDesempenio = this.getDataAnual('Hechas este año',
        [
            {
                label: 'finalizadas',
                colorIndex: 4,
                iterable: content,
                cb: (el) => el["finalizadas"] ?? 0,
            }
        ]
        )

        return [
            personalFinRea,
            personalDesempenio,
        ]
    }
} 