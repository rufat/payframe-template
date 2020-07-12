import React from 'react';
import NotifyBox from "../../NotifyBox";

function Banks() {
    return (
        <div className={'bank-list'}>
            <div className={'bank-content'}>
                <select className={'bank-list-select'}>
                    <option selected disabled value="">Choose a bank</option>
                    <option value="Bank of America">Bank of America</option>
                    <option value="Goldman Sachs">Goldman Sachs</option>
                    <option value="Morgan Stanley">Morgan Stanley</option>
                    <option value="U.S. Bancorp">U.S. Bancorp</option>
                </select>
                <img className={'bank-logo'} src={'images/banks/boa.png'} alt={'bank logo'} />
            </div>
            <NotifyBox type={'warn'} text={'The limit for the Bank of America is 500-2000 USD.'}/>
            <NotifyBox type={'err'} text={'There can be some transaction delays for the Bank of America.'}/>
        </div>
    )
}

export default Banks;
