import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/lists'
import * as taskListActions from '../../redux/actions/taskList'
import  * as menuActions from '../../redux/actions/menu'
import { Button, BodyList, Container, Menu, Item } from './styles'
import { Collapse } from 'react-bootstrap'
import NewListModal from './NewListModal'
import { motion } from "framer-motion"

const MenuBody= ()=>{
    //controla a visibilidade do toggle
    let open = useSelector(state => state.menuReducers.open)

    let lists = useSelector (state => state.listsReducers.lists)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(actions.getData())
    }, [])

    function fetchTasks(id){
        dispatch(taskListActions.fetchTasks(id))
        dispatch(menuActions.setOpen(!open))
    }

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" },
      }

    return (
        
        <motion.nav
            style ={{
                position: 'absolute',
                top: '9vh',
                width: '100%',
                zIndex: '999'
            }}
            animate={open ? "open" : "closed"}
            variants={variants}
        >       
            <Container id='menu'>

                <Menu>
                    <Button > uhuu </Button>
                    {lists.map(list =>
                        <Link to={`/task-list/${list._id}`} key={list._id} >
                            <Item>
                                <Button onClick={()=> fetchTasks(list._id)}> {list.nome} </Button>
                            </Item>
                        </Link>
                    )}     
                    <div style={{textAlign: 'right'}}><NewListModal /></div>
                </Menu>

            </Container> 
        </motion.nav>
    )
}

export default MenuBody