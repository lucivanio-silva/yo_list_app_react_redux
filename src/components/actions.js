import React from 'react'
import { EditTaskModal } from '../components/modals/EditTaskModal'
import { DeleteListModal } from '../components/modals/DeleteListModal'
import { DeleteTaskModal } from '../components/modals/DeleteTaskModal'
import SaveIcon from '@material-ui/icons/Save';


export function  getActionsList (element) {
    return  [
        {
            icon: <DeleteListModal id={element.id}/>, 
            name: 'Delete'
        }
    ]
}

export function getActionsTask (element) {

    console.log(element.listId +',' + element.taskId)
    return [
        {
            icon: <DeleteTaskModal 
                    listId={element.listId} 
                    taskId={element.taskId}
                />,
            name: 'Excluir Tarefa'
        },
        {
            icon: <SaveIcon />,
            name: 'Salvar Tarefa'
        },
        {
            icon: <EditTaskModal 
                    listId={element.listId}
                    task={
                        { _id: element.taskId, nome: element.name }
                    }
                    isHeaderMenu={true}
                />,
            name: 'Alterar Nome'
        }
    ]
}