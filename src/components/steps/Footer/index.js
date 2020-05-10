import React from 'react';
import './style.css';

function Footer() {
    return (
        <div className={'footer'}>
            <div className={'step-number'}>
                <span className={'step-circle step-active'} />
                <span className={'step-circle step-inactive'} />
                <span className={'step-circle step-inactive'} />
            </div>
            <div className={'powered-by'}>
                <span style={{color:"#292724"}}>Ödemeniz</span> <img src={"./assets/lock_gold.png"} alt={"lock"}/> <span style={{color:"#F9AC19"}}>Turbo Pay ile güvende</span>
            </div>
        </div>
    );
}

export default Footer;