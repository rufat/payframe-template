import React from 'react';
import Header from "../components/Header";
import Index from "./Wizard/";
import Footer from "./Footer";

function Main() {
    return (
        <div className={'container'}>
            <Header/>
            <Index/>
            <Footer/>
        </div>
    );
}

export default Main;
