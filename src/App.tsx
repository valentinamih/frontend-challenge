import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Route, Routes} from "react-router-dom";
import {Main} from "./Main/Main";
import {Favourites} from "./Favourites/Favourites";
import {useDispatch} from "react-redux";
import {AppDispatch} from "./redux/store";
import {getCats} from "./redux/catSlice";
import {useBottomScrollListener} from 'react-bottom-scroll-listener';

function App() {
    let dispatch = useDispatch<AppDispatch>()
    dispatch(getCats())
    const getCatsF = () => {
        dispatch(getCats())
    }
    useBottomScrollListener(getCatsF)
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/frontend-challenge'} element={<Main/>}/>
                <Route path={'/frontend-challenge/favourites'} element={<Favourites/>}/>
            </Routes>
        </div>
    );
}

export default App;
