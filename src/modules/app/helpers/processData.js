import ProcessAnual from './typesProcess/processAnual'
import ProcessMensual from './typesProcess/processMensual'
import ProcessTotal from './typesProcess/processTotal'

export default class ProcessEstadisticas {
    constructor(){
        this.strategies = [new ProcessAnual(), new ProcessMensual(), new ProcessTotal()]
    }
    toChartData(data){
        const strategy = this.strategies.find(el => el.type === data.type)
        return new Promise((res, rej)=>{
            if (strategy) {
                const result = strategy.toChartData(data)
                res(result)
            }
            rej([])
        })
    }
}