import React, {useEffect, useState} from 'react';
import './style.css';

function OTP(props) {
  const [counter, setCounter] = React.useState(60);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className={'otp-area'}>
      <div className={'countdown'}>{counter} saniye</div>
      <div className={'otp-contents'}>
        <div className={'otp-head'}>
          <img alt={'logo'} src={'./assets/banks/garanti.png'} />
          <p>SMS Onay Kodu</p>
        </div>
        <div className={'otp-form'}>
          <input type={'number'} placeholder={'_'} />
          <input type={'number'} placeholder={'_'} />
          <input type={'number'} placeholder={'_'} />
          <input type={'number'} placeholder={'_'} />
          <input type={'number'} placeholder={'_'} />
          <input type={'number'} placeholder={'_'} />
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