import React from 'react';
import './style.css';

function UserInfo() {
  return (
    <div className={'userInfo'}>
      <div className={'head'}>
        <img alt={'logo'} src={'./assets/logo_2.png'} />
        Lütfen Formu Doldurunuz
      </div>
      <div className={'form'}>
        <input placeholder={'Kullanıcı Adı'} />
      </div>
    </div>
  );
}

export default UserInfo;