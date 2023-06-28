import ProcessAnual from './typesProcess/processAnual'
import ProcessDesempenio from './typesProcess/processDesempenio'
import ProcessMensual from './typesProcess/processMensual'
import ProcessTotal from './typesProcess/processTotal'
import ProcessPersonal from './typesProcess/processPersonal'
import { useContextStore } from '../store/context'

const contextStore = useContextStore()

export default class ProcessEstadisticas {
    constructor(){
        let strategiesSet = []
        if (contextStore.getUserType === 'render_admin') {
            strategiesSet = [
                    ProcessAnual, 
                    ProcessMensual, 
                    ProcessTotal, 
                    ProcessDesempenio,
                    ProcessPersonal,
                ]
        }
        if(contextStore.getUserType === 'render_current'){
            strategiesSet = [ProcessPersonal]
        }
        this.strategies = strategiesSet
    }
    toChartData(data){
        const strategyClass = this.strategies.find(el => el.type === data.type)
        return new Promise((res, rej)=>{
            if (strategyClass) {
                const strategy = new strategyClass()
                const result = strategy.toChartData(data)
                res(result)
            }
            rej([])
        })
    }
}