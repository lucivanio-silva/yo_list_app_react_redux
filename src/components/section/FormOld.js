import React, {Fragment} from 'react'
import {sidebar} from '../Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/task'

const FormNewTask = (props) => {

    const dispatch = useDispatch()
    
    function handleSendData(event){
        event.preventDefault()
        dispatch(actions.addTask({
            nome: document.getElementById('nome').value,
            conclusao: document.getElementById('conclusao').value,
            anotacao: document.getElementById('anotacao').value,
            lista: props.info.listID
        }))

        dispatch(actions.simpleFetch(props.info.listID))

        close()
    }

    return (
        <Fragment>
            <h2 id="nova-lista">Nova Lista</h2>
            <p id="simple-modal-description">
               Nova Tarefa de:  {props.info.listName}
            </p>

            <form id='formulario' onSubmit={e => handleSendData(e)}>
                <input 
                    name='nome'
                    type='name'
                    id='nome'
                    placeholder='Nome da Tarefa'
                />
                <input 
                    type='text' 
                    id='conclusao' 
                    placeholder='Adicionar Data/Hora' 
                />
                <textarea 
                    rows='5' 
                    id='anotacao' 
                    placeholder='Anotações: '>
                </textarea>

                <button onClick={()=>props.update}>Salvar</button>
            </form>
        </Fragment>
    )
}

export default FormNewTask