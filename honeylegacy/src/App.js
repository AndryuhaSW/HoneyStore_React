import React, {useEffect, useState} from 'react';
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import {useInView} from "react-intersection-observer";
import Messengers from "./components/Messengers/Messengers";
import MainPage from "./pages/main/MainPage";


function App() {

    const [ref, inView, entry] = useInView({threshold: 1,});


    return (
        <div className='root' >
            <Navbar visible={inView}/>

            <br/>
            <br/>
            <hr ref={ref} />
            <br/>

            <MainPage/>



            <Messengers />
        </div>
    );
}

export default App;