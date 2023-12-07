import React from 'react';
import Description from "./Description/Description";
import Advantages from "./Advantages/Advantages";
import Facts from "./Facts/Facts";
import FAQ from "../../components/FAQ/FAQ";

const MainPage = () => {
    return (
        <div>

            <Description/>

            <Advantages />

            <Facts />

            <FAQ />

            <div style={{paddingTop: '2000px'}}></div>
        </div>
    );
};

export default MainPage;