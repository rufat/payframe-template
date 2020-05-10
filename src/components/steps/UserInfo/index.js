import React from 'react';
import './style.css';

function UserInfo() {
  return (
    <div className={'user-info'}>
      <div className={'head'}>
        <img alt={'logo'} src={'./assets/logo_2.png'} />
        Lütfen Formu Doldurunuz
      </div>
      <div className={'form'}>
        <select className={'select-bank'} required>
          <option disabled selected hidden value="">Banka seçiniz</option>
          <option value="garanti">Garanti Bankası</option>
        </select>
        <input type={'text'} placeholder={'Kullanıcı adı'} />
        <input type={'text'} placeholder={'Üye T.C. kimlik no'} />
        <input type={'number'} placeholder={'Tutar'} />
      </div>
      <p className={'bank-info'}>Garanti için Minimum Yatırım: 20.00, Max Yatırım: 5000.00</p>
      <button className={'start-process-btn'}>
        <img src={'./assets/lock_gray.png'} alt={'lock'} />
        <span>İşlemi başlat</span>
      </button>
    </div>
  );
}

export default UserInfo;