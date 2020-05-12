import React, { useState } from 'react';
import './style.css';

import UserInfo from '../components/steps/UserInfo/';
import BankAuth from '../components/steps/BankAuth/';
import OTP from '../components/steps/OTP/';
import Result from '../components/steps/Result/';

import Loading from '../components/Loading';
import Footer from '../components/steps/Footer/';

function InitialPage() {
  const stepMaxIndex = 4;
  const [loadingLabel, setLoadingLabel] = useState('İşleniyor');
  const [stepIndex, setStepIndex] = useState(3);
  const [loadingBar, setLoadingBar] = useState(false)

  const stepHandler = (goBack = false, step = null) => {
    if(!step && !goBack && stepIndex === stepMaxIndex) return;
    if(goBack) setLoadingLabel("Geri dönülüyor");
    if(!goBack) setLoadingLabel("İşleniyor");
    setLoadingBar(true);
    setTimeout(() => {
      setLoadingBar(false);
      if(step) setStepIndex(step);
      if(!step) setStepIndex(goBack ? stepIndex - 1 : stepIndex + 1);
    }, 500);
  };

  const stepNavContainer = () => {
    switch (stepIndex) {
      case 1:
        return <UserInfo stepHandler={stepHandler} />;
      case 2:
        return <BankAuth stepHandler={stepHandler} />;
      case 3:
        return <OTP stepHandler={stepHandler} />;
      case 4:
        return <Result stepHandler={stepHandler} />;
      default:
        return <>Under construction.</>;
    }
  }

  return (
    <div className={'box'}>
      <div className={'header'}>
        {
          stepIndex > 1 && (
            <div className={'nav'} onClick={() => stepHandler(true)}>
              <img alt={'back'} src={'./assets/left_arrow.png'} />
              <p>Geri</p>
            </div>
          )
        }
        <div className={'logo'}>
          <img alt={"logo"} src={'./assets/logo_2.png'} />
        </div>
      </div>
      <div className={'content'}>
        {loadingBar && <Loading label={loadingLabel} />}
        {!loadingBar && stepNavContainer()}
      </div>
      <Footer index={stepIndex} steps={stepMaxIndex} />
    </div>
  );
}

export default InitialPage;