import React from 'react';

function Finalize(props) {
    const {restartFlow, finishFlow} = props;
    return (
        <div className={'finalize-step'}>
            <div className={'success-mark'} />
            <div className={'transfer-info'}>
                <span>780,00 TRY</span>
                <p>18/06/2020 03:58:20 AM</p>
            </div>
            <div className={'transfer-message'}>
                <span>Ödeme işleminiz başarıyla gerçekleşti</span>
                <p>Bakiyenizin güncellenmesi gönderim gerçekletirilen hesabın
                    yoğunluğuna bağlı olarak, zaman alabilir.</p>
            </div>
            <div className={'transfer-actions'}>
                <button onClick={() => finishFlow()}>İşlemi bitir</button>
                <button className={'inverted-btn'} onClick={() => restartFlow()}>Yeni işlem</button>
            </div>
            <div className={'finalize-footer'}>
                <p>İşlem detaylarını mail olarak almak ister misiniz? <a href={'#'}>Tıklayın.</a></p>
            </div>
        </div>
    )
}

export default Finalize;
