import React from "react";
import {AppUseSelector} from "../redux/AppUseSelector";
import style from "../Main/Main.module.css";
import {CatItem} from "../CatItem/CatItem";

export const Favourites: React.FunctionComponent<PropsType> = props => {
    let cats = AppUseSelector(state => state.catsReducer.cats)
    return <section>
        <div className={style.catsContainer}>
            {cats.map((cat) => {
                return cat.isFavourite ? <CatItem cat={cat} key={cat.id}/> : null
            })}
        </div>
    </section>
}

type PropsType = {}