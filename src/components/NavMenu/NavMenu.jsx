import React, { useContext } from 'react'
import { UserContext } from '../../context/UserProvider/UserProvider';
import Styles from './NavMenu.module.scss'


const NavMenu = () => {

    const user = useContext(UserContext);


  return (
    <div className={Styles.navMenu}>
        <select name="name" id='name'/>
            <option value="name">{user.name}</option>
    </div>
  )
}

export default NavMenu