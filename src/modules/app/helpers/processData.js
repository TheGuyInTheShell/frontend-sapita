const dougnutStructure = {
        title: '',
        content: {
          labels: [],
          datasets: [
            {
              backgroundColor: [],
              data: []
            }
          ]
        }
      }
const colorPallete = ['#29BF12', '#F21B3F', '#08BDBD', '#FF9914', '#ABFF4F']

class ProcessTotal {
    constructor(){
        this.type = 'total'
    }
    toChartObject(data){
        const processData = []
        return processData
    }
}

class ProcessMensual {
    constructor(){
        this.type = 'mensual'
    }
    #countMethod({content, sumatory, regex, colors, title}){
        const result = structuredClone(dougnutStructure)
        result.title = title
        result.content.labels = new Set()
        for (const key of content) {
            const stringKey = regex.exec(key)[0]
            if (stringKey) {
                sumatory[stringKey] += content[key]
                dougnutStructure.content.labels.add(stringKey)
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
    #countSitio(content, sitio){
        const result = structuredClone(dougnutStructure)
        result.title = sitio
        result.content.labels = ['pendientes', 'realizando', 'finalizadas']
        const sitioData = Object.entries(content)
                            .filter(el => el[0].includes(sitio.lowerCase()))
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
    toChartObject(data){
        const content = data.content[0]

        const byEstado = this.#countMethod({
            title: 'Actividades mensuales',
            content,
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
            content,
            sumatory: {
                internas: 0,
                externas: 0,
            },
            regex: /(internas|externas)/,
            colors:  colorPallete.slice(0, 2),
        })

        const byInternas = this.#countSitio(content, 'Internas')

        const byExternas = this.#countSitio(content, 'Externas')

        return [
            byEstado,
            byInternasVsExternas,
            byInternas,
            byExternas,
        ]
    }
}

class ProcessAnual{
    constructor(){
        this.type = 'anual'
    }
    toChartObject(data){
        const processData = []
        return processData
    }
}

class Strategy {
    constructor(){
        this.strategies = [new ProcessAnual(), new ProcessMensual(), new ProcessTotal()]
    }
    toChartObject(data){
        const strategy = this.strategies.find(el => el.type = data.type)
        if (strategy) {
            return strategy.toChartObject(data)
        }
        return {}
    }
}