import { dougnutStructure, colorPallete } from "./structuresCharts"

export default class ProcessMensual {
    constructor(){
        this.type = 'mensuales'
    }
    #countMethod({sumatory, regex, colors, title}){
        const result = structuredClone(dougnutStructure)
        result.title = title
        result.content.labels = new Set()
        for (const key in this.content[0]) {
            const stringKey = regex.exec(key)[0]
            if (stringKey) {
                sumatory[stringKey] += +this.content[0][key]
                result.content.labels.add(stringKey)
            }
        }
        result.content.labels = Array.from(result.content.labels)
        result.content.datasets = [
            {
                backgroundColor: colors,
                data: Object.values(sumatory)
            }
        ] 
        return result

    }
    #countSitio(sitio){
        const result = structuredClone(dougnutStructure)
        result.title = sitio
        result.content.labels = ['pendientes', 'realizando', 'finalizadas']
        const sitioData = Object.entries(this.content[0])
                            .filter(el => el[0].includes(sitio.toLowerCase()))
                            .reduce((acc, cur)=>[
                                ...acc,
                                cur[1]
                            ], [])
        result.content.datasets = [
            {
                backgroundColor: colorPallete.slice(0, 3),
                data: sitioData
            }
        ]
        return result
    }
    toChartData(data){
        this.content = data.content

        const byEstado = this.#countMethod({
            title: 'Actividades mensuales',
            sumatory: {
                pendientes: 0,
                realizando: 0,
                finalizadas: 0 
            },
            regex: /(pendientes|realizando|finalizadas)/,
            colors: colorPallete.slice(0, 3),
        })

        const byInternasVsExternas = this.#countMethod({
            title: 'Internas VS Externas',
            sumatory: {
                internas: 0,
                externas: 0,
            },
            regex: /(internas|externas)/,
            colors:  colorPallete.slice(0, 2),
        })

        const byInternas = this.#countSitio('Internas')

        const byExternas = this.#countSitio('Externas')
  
        return [
            byEstado,
            byInternasVsExternas,
            byInternas,
            byExternas,
        ]
    }
}