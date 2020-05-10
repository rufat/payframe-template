import React, {useState} from 'react';
import './style.css';

import UserInfo from '../components/steps/UserInfo/';
import Loading from '../components/Loading';
import Footer from '../components/steps/Footer/';

function InitialPage() {
  const [loadingBar, setLoadingBar] = useState(false)

  return (
    <div className={'box'}>
      <div className={'header'}>
        <div className={'nav'} onClick={() => setLoadingBar(false)}>
          <img alt={'back'} src={'./assets/left_arrow.png'} />
          Geri
        </div>
        <div className={'logo'}>
          <img alt={"logo"} src={'./assets/logo_2.png'} />
        </div>
      </div>
      <div className={'content'}>
        {loadingBar && <Loading label={'İşleniyor'}/>}
        {!loadingBar && <UserInfo setLoadingBar={setLoadingBar} />}
      </div>
      <Footer/>
    </div>
  );
}

export default InitialPage;