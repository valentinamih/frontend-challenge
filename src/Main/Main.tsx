import React from "react";
import {AppUseSelector} from "../redux/AppUseSelector";
import {CatItem} from "../CatItem/CatItem";
import style from './Main.module.css'

export const Main: React.FunctionComponent<PropsType> = props => {
    let cats = AppUseSelector(state => state.catsReducer.cats)
    return <main className={style.main}>
        <div className={style.catsContainer}>
            {cats.map((cat) => {
                return <CatItem cat={cat} key={cat.id}/>
            })}
        </div>
        <span>
            ...загружаем еще котиков...
        </span>
    </main>
}

type PropsType = {}