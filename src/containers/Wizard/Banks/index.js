import React from 'react';
import NotifyBox from "../../../components/NotifyBox";

function Banks() {
    return (
        <div className={'bank-list'}>
            <div className={'bank-content'}>
                <select className={'bank-list-select'}>
                    <option selected disabled>Choose a bank</option>
                    <option>Bank of America</option>
                    <option>Goldman Sachs</option>
                    <option>Morgan Stanley</option>
                    <option>U.S. Bancorp</option>
                </select>
                <img className={'bank-logo'} src={'images/banks/boa.png'} alt={'bank logo'} />
            </div>
            <NotifyBox type={'warn'} text={'The limit for the Bank of America is 500-2000 USD.'}/>
            <NotifyBox type={'err'} text={'There can be some transaction delays for the Bank of America.'}/>
        </div>
    )
}

export default Banks;
