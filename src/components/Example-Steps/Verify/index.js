import React, {useState, useEffect} from 'react';
import OtpInput from 'react-otp-input';

function Verify() {
    const [code, setCode] = useState('')
    const [counter, setCounter] = useState(60)

    useEffect(() => {
        let countDownTimer = null;
        if(counter > 0) countDownTimer = setTimeout(() => setCounter(counter - 1), 1000);
        return () => {
            if(countDownTimer) clearTimeout(countDownTimer);
        }
    }, [counter]);

    return (
        <div className={'verify-step'}>
            <div className={'verify-step-otp'}>
                <img className={'bank-logo'} src={'images/banks/boa.png'} alt={'bank logo'} />
                <p>Enter your one-time SMS code</p>
                <div className={'verify-otp-field'}>
                    <OtpInput
                        inputStyle={'vso-input'}
                        onChange={v => setCode(v)}
                        value={code}
                        numInputs={4}
                        isInputNum={true}
                        shouldAutoFocus={true}
                    />
                </div>
                <div className={'auth-countdown'}>
                    {counter} sec.
                </div>
                <p className={'auth-note'}>In order to proceed with your transaction, you need to enter your one-time SMS code sent to your phone.</p>
            </div>
        </div>
    )
}

export default Verify;
