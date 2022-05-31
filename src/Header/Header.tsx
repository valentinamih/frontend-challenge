import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";


export const Header: React.FunctionComponent<PropsType> = props => {
    return <header className={style.header}>
        <div className={style.navigation}>
            <NavLink end={true} to={'/frontend-challenge/'} className={({isActive}) => isActive ? style.active : ''}>
                Все котики
            </NavLink>
            <NavLink to={'/frontend-challenge/favourites'} className={({isActive}) => isActive ? style.active : ''}>
                Любимые котики
            </NavLink>
        </div>
    </header>
}

type PropsType = {}