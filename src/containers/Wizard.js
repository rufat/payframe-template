import React from 'react';

function Wizard() {
    return (
        <div className={'wizard'}>
            <div className={'page-title'}><span>Masterpay</span> Para Yatırma</div>
            <div className={'steps'}>
                <div className={'step-item'}>
                    <div className={'step-header'}>
                        <span className={'step-number'}>1</span>
                        <div className={'step-text'}>
                            <div className={'step-title'}>Para Yatırma Yöntemi</div>
                            <div className={'step-desc'}>Para yatırma seçenekleri sağlayıcınıza göre değişiklik gösterebilir.</div>
                        </div>
                    </div>
                    <div className={'step-content'}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wizard;
