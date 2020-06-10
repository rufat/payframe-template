import React from 'react';
import NotifyBox from "../../../components/NotifyBox";

function Account() {
    return (
        <div className={'account-step'}>
            <div className={'account-content'}>
                <img className={'bank-logo'} src={'images/banks/garanti.png'} alt={'bank logo'} />
                <p>Garanti BBVA için TL hesabı seçiniz</p>
                <select>
                    <option selected>124 - 566434 MODA</option>
                </select>
            </div>
        </div>
    )
}

export default Account;
