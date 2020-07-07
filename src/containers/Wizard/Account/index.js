import React from 'react';
import NotifyBox from "../../../components/NotifyBox";

function Account() {
    return (
        <div className={'account-step'}>
            <div className={'account-content'}>
                <img className={'bank-logo'} src={'images/banks/boa.png'} alt={'bank logo'} />
                <p>Select an account</p>
                <select>
                    <option selected>124 - 566434</option>
                </select>
            </div>
        </div>
    )
}

export default Account;
