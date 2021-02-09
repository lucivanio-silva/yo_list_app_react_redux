import {actionsTypes} from '../constants/lists'

const INITIAL_STATE = {
    lists: [],
    loading: false,
    error: null,
    msg: null
}

const reducers = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case actionsTypes.FETCH_LISTS_BEGIN :
            //marcando o estado como carregando (caso queiramos exibir algum looading no futuro)
            //tambem estamos resetando os erros (null) para recomesar as buscar por eles
            return {
                ...state,
                loading: true,
                error: null
            }
        
        case actionsTypes.FETCH_LISTS_SUCCESS :
            //definindo o carregamento como false e carregando os itens do servidor no state
            return {
                ...state,
                loading: false,
                lists: action.payload.data
            }

        case actionsTypes.FETCH_LISTS_FAILURE : 
            // A solicitação falhou. Está feito. Portanto, defina o carregamento como "false".
            // Salve o erro, para que possamos exibi-lo em algum lugar.
            // Como falhou, não temos mais itens a serem exibidos, então defina `items` vazio.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                lists: []
            }
        
        case actionsTypes.ADD_LIST_BEGIN :
            return {
                ...state,
                loading: true,
                error: null
            }
        
        case actionsTypes.ADD_LIST_SUCCESS :
            return {
                ...state,
                loading: false,
                msg: action.payload.msg
            }
        
        case actionsTypes.ADD_LIST_FAILURE :
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                lists: []
            }

        case actionsTypes.REMOVE_LIST_BEGIN :
            return {
                ...state,
                loading: true,
                error: null
            }

        case actionsTypes.REMOVE_LIST_SUCCESS :
            return {
                ...state,
                loading: false,
                msg : action.payload.msg,
            }
        
        case actionsTypes.REMOVE_LIST_FAILURE :
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                lists: []
            }

        case actionsTypes.EDIT_LIST_BEGIN :
            return {
                ...state,
                loading: true,
                error: null
            }

        case actionsTypes.EDIT_LIST_SUCCESS :
            return {
                ...state,
                loading: false,
                msg:  action.payload.msg
            }

        case actionsTypes.EDIT_LIST_FAILURE :
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                lists: []
            }
        
        default :   
            // SEMPRE tem um caso padrão em um redutor
            return state
    }
}

export { reducers }

