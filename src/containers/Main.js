import React from 'react';
import Header from "../components/Header";
import Wizard from "./Wizard";
import Footer from "./Footer";

function Main() {
    return (
        <div className={'container'}>
            <Header/>
            <Wizard/>
            <Footer/>
        </div>
    );
}

export default Main;
