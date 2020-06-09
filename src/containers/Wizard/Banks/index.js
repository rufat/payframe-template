import React from 'react';
import NotifyBox from "../../../components/NotifyBox";

function Banks() {
    return (
        <div className={'bank-list'}>
            <div className={'bank-content'}>
                <select className={'bank-list-select'}>
                    <option selected disabled>Banka seçiniz</option>
                    <option>Garanti BBVA</option>
                    <option>Ziraat</option>
                    <option>Yapı</option>
                    <option>İş Bankası</option>
                </select>
                <img className={'bank-logo'} src={'images/banks/garanti.png'} alt={'bank logo'} />
            </div>
            <NotifyBox type={'warn'} text={'Garanti bankası için belirtilen Minimum 500TL - Maksimum 5.000TL’dir.'}/>
            <NotifyBox type={'err'} text={'Garanti Bankası için işleminizde yoğunluğa bağlı olarak gecikme yaşanabilir.'}/>
        </div>
    )
}

export default Banks;
