import React, {useState} from 'react';
import OtpInput from 'react-otp-input';

function Verify() {
    const [code, setCode] = useState('')

    return (
        <div className={'verify-step'}>
            <div className={'verify-step-otp'}>
                <img className={'bank-logo'} src={'images/banks/garanti.png'} alt={'bank logo'} />
                <p>SMS Onay Kodu</p>
                <OtpInput
                    inputStyle={'vso-input'}
                    onChange={v => setCode(v)}
                    value={code}
                    numInputs={6}
                    isInputNum
                    shouldAutoFocus
                />
                <div className={'auth-countdown'}>
                    46 Saniye
                </div>
                <p className={'auth-note'}>İşleminize devam edebilmek için Garanti BBVA hesabınıza tanımlı olan numaraya
                    gelen onay kodunu giriniz. Ardından “Devam” butonuna tıklayarak, işlemi gönderin.</p>
            </div>
        </div>
    )
}

export default Verify;
