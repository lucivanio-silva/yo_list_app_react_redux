import React from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { EditListModal } from '../modals/EditListModal'
import { DeleteListModal } from '../modals/DeleteListModal'
import MoreVertIcon from '@material-ui/icons/MoreVert';


export default function OptionsList(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button 
          aria-controls="simple-menu" 
          aria-haspopup="true" 
          onClick={handleClick} 
          style={{minWidth: '15px'}}
        >
            <MoreVertIcon color='action'/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <EditListModal list={props.list} />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <DeleteListModal id={props.list._id} />
          </MenuItem>
        </Menu>
      </div>
    );
  }