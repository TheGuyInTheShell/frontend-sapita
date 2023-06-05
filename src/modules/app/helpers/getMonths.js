const getMonths = function(init, limit){
    const year = new Date().getFullYear()
    return Array(limit - init).fill('?').map( () => {
        const month = new Date(year, init).toLocaleString('es-ES', { month: 'long' });
        init += 1
        return month
    })
}

export default getMonths