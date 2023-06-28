import getMonths from "../getMonths";
import SuperiorAnual from "./superiorAnual";

export default class ProcessAnual extends SuperiorAnual{
    static type = 'anuales'
    constructor(){
        super()
        this.months = getMonths(0, 12)
    }
    toChartData(data){
        const content = data.content

        const totalAnual = this.getDataAnual('Total anual',[
            {
                label: 'Realizadas',
                colorIndex: 0,
                iterable: content,
                cb: (el)=> el["internas_finalizadas"] + el["externas_finalizadas"],
            }
        ], content)
        const internasVsExternasAnual = this.getDataAnual('Internas vs externas',[
            {
                label: 'Internas este año',
                colorIndex: 0,
                iterable: content,
                cb: (el)=> el["internas_finalizadas"],
            },
            {
                label: "Externas este año",
                colorIndex: 2,
                iterable: content,
                cb: (el)=> el["externas_finalizadas"],
            },
        ])
        return [
            totalAnual,
            internasVsExternasAnual
        ]
    }
}