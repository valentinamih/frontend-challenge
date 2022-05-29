import React from "react";
import style from './CatItem.module.css'
import {toggleLikeCat} from "../redux/catSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store";
import {CatType} from "../types/types";
import classNames from "classnames/bind";

let cx = classNames.bind(style);

export const CatItem: React.FunctionComponent<PropsType> = props => {
    const className = cx({
        likeButton: true,
        favLikeButton: props.cat.isFavourite
    })
    let dispatch = useDispatch<AppDispatch>()
    const likeOnClick = () => {
        return dispatch(toggleLikeCat(props.cat))
    }
    return <div className={style.catItem}>
        <div className={style.catImage} style={{backgroundImage: `url(${props.cat.url})`}}>
        </div>
        <div className={className}
             onClick={() => likeOnClick()}
        />
    </div>
}

type PropsType = {
    cat: CatType
}