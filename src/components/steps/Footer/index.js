import React from 'react';
import './style.css';

function Footer(props) {
    const generateSteps = () => {
        let steps = [];
        for(let x = 1; x < props.steps+1; x++) {
            steps.push(<span className={`step-circle ${props.index === x ? 'step-active' : 'step-inactive'}`} />)
        }
        return steps;
    };

    return (
        <div className={'footer'}>
            <div className={'f-container'}>
                <div className={'step-number'}>
                    {generateSteps()}
                </div>
                <div className={'powered-by'}>
                    <span style={{ color: "#292724" }}>Ödemeniz</span> <img src={"./assets/lock_gold.png"} alt={"lock"} /> <span style={{ color: "#F9AC19" }}>Turbo Pay ile güvende</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;