import React from 'react'
import { BodyBar, MenuButton } from './styles'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import  * as actions from '../../redux/actions/menu'
import Menu  from './teste'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';

export const MenuBar = (props) => {

    let open = useSelector(state => state.menuReducers.open)
    const dispatch = useDispatch ()

    function handleOpen () {
        dispatch(actions.setOpen(!open))
    }
    
    return(
        <>
        <Menu />
        <BodyBar>
            <div style={{alignSelf: 'center'}}>
                    <MenuButton onClick={handleOpen}>
                        {open === true ? 
                            <MenuOpenRoundedIcon fontSize='large' style={{color: '#FFF'}}/> :
                            <MenuRoundedIcon fontSize='large' style={{color: '#FFF'}}/>
                        }
                    </MenuButton>
            </div>
        </BodyBar>
        </>
    )
}