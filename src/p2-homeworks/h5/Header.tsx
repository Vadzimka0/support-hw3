import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './../h5/pages/Header.module.css'
import {PATH} from "./Routes";

function Header() {
  return (
    <div className={s.header}>

      <NavLink
        to={PATH.PRE_JUNIOR}
        activeClassName={s.active}>
        PreJunior
      </NavLink>

      <NavLink
        to={PATH.JUNIOR}
        activeClassName={s.active}>
        Junior
      </NavLink>

      <NavLink
        to={PATH.JUNIOR_PLUS}
        activeClassName={s.active}>
        JuniorPlus
      </NavLink>

    </div>
  )
}

export default Header
