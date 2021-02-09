import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/lists'
import * as taskListActions from '../../redux/actions/taskList'
import * as menuActions from '../../redux/actions/menu'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import NewListModal from './NewListModal'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { EditListModal } from '../modals/EditListModal'
import { GridContainer } from '../GridContainer'

import EmailIcon from '@material-ui/icons/Email';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


import AssignmentIcon from '@material-ui/icons/Assignment';
import { motion } from "framer-motion"
import OptionsList from '../menu/OptionsList'


export default function Menu() {
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

    //expande ou esconde lista de tarefas
    const [display, setDisplay] = React.useState(true);
    const handleClick = () => {
        setDisplay(!display);
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
        <Container id='menu' style={{background: '#F5F5F5'}}>
            <List component="nav" aria-label="main menu folders">
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <EmailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Caixa de Entrada" secondary="0 itens" />
                </ListItem>
                <Divider />
                <Link to={`/task-today`} style={{textDecoration: 'none', color: 'inherit'}} >
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <WbSunnyRoundedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Tarefas do Dia" secondary="0 tarefas" />
                    </ListItem>
                </Link>
                <Divider />
                <ListItem button onClick={handleClick}>
                    <ListItemAvatar>
                        <Avatar>
                            <AssignmentTurnedInRoundedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                        primary="Listas de Tarefas"
                        secondary="0 listas" 
                    />
                        {display ? <ExpandLess color='action'/> : <ExpandMore color='action'/>}
                </ListItem>
                <Divider />
                <Collapse in={display} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding >
                        {lists.map(list =>
                            <GridContainer key={list._id}>
                            <Link to={`/task-list/${list._id}`} style={{textDecoration: 'none'}}>
                                <ListItem button 
                                    style={{paddingLeft: '3rem'}} 
                                    onClick={()=> fetchTasks(list._id)}
                                >
                                    <ListItemIcon style={{minWidth: '40px'}}>
                                        <PlayArrowIcon />
                                    </ListItemIcon>
                                    <ListItemText 
                                        primary={list.nome} 
                                        secondary="0 itens" 
                                        style={{color: '#04b4ae'}}
                                    />
                                </ListItem>
                            </Link>
                            <OptionsList list={list}/>
                            </ GridContainer>
                        )}
                        <ListItem button style={{paddingLeft: '3.1rem'}} >
                            <ListItemIcon style={{minWidth: '40px'}}>
                                <SubdirectoryArrowRightIcon />
                            </ListItemIcon>
                            <NewListModal />
                        </ListItem> 
                        <Divider />    
                    </List>
                </Collapse>
            </List>
        </ Container>

    </motion.nav>
  );
}