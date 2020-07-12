import React from 'react';

function Finalize(props) {
    const {restartFlow, finishFlow} = props;
    return (
        <div className={'finalize-step'}>
            <div className={'success-mark'} />
            <div className={'transfer-info'}>
                <span>780,00 USD</span>
                <p>18/06/2020 03:58:20 AM</p>
            </div>
            <div className={'transfer-message'}>
                <span>Payment is successful</span>
                <p>You will see the transaction changes after a while depending on the service provider's traffic.</p>
            </div>
            <div className={'transfer-actions'}>
                <button onClick={() => finishFlow()}>Close</button>
                <button className={'inverted-btn'} onClick={() => restartFlow()}>New transaction</button>
            </div>
            <div className={'finalize-footer'}>
                <p>Would you like to receive a transaction receipt by mail? <a href={'#send'}>Yes, send.</a></p>
            </div>
        </div>
    )
}

export default Finalize;
