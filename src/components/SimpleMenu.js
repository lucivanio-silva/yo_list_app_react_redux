import React from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { DeleteTaskModal } from './modals/DeleteTaskModal'
import { EditTaskModal } from './modals/EditTaskModal'


export default function SimpleMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{minWidth: '15px'}}>
            <span style={{fontSize: '1.2rem', color: '#FFF'}}><i className="fas fa-ellipsis-v"></i></span>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <DeleteTaskModal 
              listId={props.task.lista} 
              taskId={props.task._id}
            />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <EditTaskModal 
              listId={props.task.lista} 
              task={props.task}
            />
          </MenuItem>
          <MenuItem onClick={handleClose}>Compartilhar</MenuItem>
          <MenuItem onClick={handleClose}>Concluir Tudo</MenuItem>
        </Menu>
      </div>
    );
  }