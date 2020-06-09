import React from 'react';

function Amount() {
    return (
        <div className={'amount-step'}>
            <div className={'amount c-input-tile'}>
                <span>Tutar</span>
                <input type={'number'} min={1} placeholder={'Tutar'}/>
            </div>
            <span>Limit : 100TL - 25.000TL / İşlem Ücreti : %2.5 (22.25 TRY)</span>
        </div>
    )
}

export default Amount;
