import React from 'react';

function Amount() {
    return (
        <div className={'amount-step'}>
            <div className={'amount c-input-tile'}>
                <span>Amount</span>
                <input type={'number'} min={1} placeholder={'Amount'}/>
            </div>
            <span>Limits : 100 USD - 25.000 USD / Fee : %2.5 (22.25 USD)</span>
        </div>
    )
}

export default Amount;
