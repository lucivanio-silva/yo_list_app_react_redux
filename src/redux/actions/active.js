export function setActive(data){
    return function (dispath) {
        dispath ({
            type: 'SET_ACTIVE',
            payload: { data }
        })
        console.log(data)
    }
}