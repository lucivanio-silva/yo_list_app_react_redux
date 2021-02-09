import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import EditIcon from '@material-ui/icons/Edit';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Backdrop from '@material-ui/core/Backdrop';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import './style.css'
import { useSelector } from 'react-redux'
import { getActionsList, getActionsTask } from './actions'

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: 'absolute',
    top: '2vh',
    right: '1vh',
  },
  fab: {
     width: '2.2rem',
     height: '2.2rem',
     boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.0)'
  }
}));

export default function HeaderMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [element, setElement] = React.useState([]);

  let activeElement = useSelector (state => state.activeReducers.elementInfo)

  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleOpen = () => {
    selectMenu()
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const selectMenu = () => {
    if (activeElement.type == 'list') {
      let element = getActionsList(activeElement)
      setElement(element)
    }

    if (activeElement.type == 'task') {
      let element = getActionsTask((activeElement))
      setElement(element)
    }
  }

  React.useEffect( ()=> {
    selectMenu()
  },[])

  return (
    <div >
        <Backdrop open={open} style={{zIndex: '999'}}/>
        <SpeedDial
            ariaLabel="SpeedDial openIcon example"
            className={classes.speedDial}
            hidden={hidden}
            icon={<SpeedDialIcon icon={<MenuRoundedIcon style={{color: '#FFF'}}/>} 
              openIcon={<ArrowDownwardIcon />} 
            />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            direction = 'down'
            classes = {{fab: classes.fab}}
        >
            {element.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={handleClose}
                />
            ))}
            
        </SpeedDial>
    </div>
  );
}