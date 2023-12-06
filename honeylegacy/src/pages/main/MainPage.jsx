import React from 'react';
import Description from "./Description/Description";
import Advantages from "./Advantages/Advantages";
import Facts from "./Facts/Facts";

const MainPage = () => {
    return (
        <div>

            <Description/>

            <Advantages />

            <Facts />

            <div style={{paddingTop: '2000px'}}></div>
        </div>
    );
};

export default MainPage;