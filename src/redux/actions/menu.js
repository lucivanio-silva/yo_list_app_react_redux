export function setOpen(data){
    return function (dispath) {
        dispath ({
            type: 'SET_OPEN',
            payload: { data }
        })
    }
}