import React, {useState} from 'react';

function Methods() {
    const [activeMethod, setActiveMethod] = useState(1)

    const selectMethod = (i) => {
        setActiveMethod(i);
    }

    return (
        <div className={'method-list'}>
            <div className={`method-item ${activeMethod === 1 ? 'method-item-active' : ''}`}
                 onClick={() => selectMethod(1)}>
                {activeMethod === 1 && (
                    <div className={'method-item-active-mark'}>
                        <span className={'tri'}/>
                        <span className={'check'}/>
                    </div>
                )}
                <div className={'method-content'}>
                    <span className={'method-item-icon'}/>
                    <div className={'method-label'}>
                        <div className={'method-title'}>Bank Wire Transfer</div>
                        <div className={'method-desc'}>Transfer time: 2 min.</div>
                    </div>
                </div>
            </div>
            <div className={`method-item ${activeMethod === 2 ? 'method-item-active' : ''}`}
                 onClick={() => selectMethod(2)}>
                {activeMethod === 2 && (
                    <div className={'method-item-active-mark'}>
                        <span className={'tri'}/>
                        <span className={'check'}/>
                    </div>
                )}
                <div className={'method-content'}>
                    <span className={'method-item-icon'}/>
                    <div className={'method-label'}>
                        <div className={'method-title'}>QR Payment</div>
                        <div className={'method-desc'}>Transfer time: 2 min.</div>
                    </div>
                </div>
            </div>
            <div className={`method-item ${activeMethod === 3 ? 'method-item-active' : ''}`}
                 onClick={() => selectMethod(3)}>
                {activeMethod === 3 && (
                    <div className={'method-item-active-mark'}>
                        <span className={'tri'}/>
                        <span className={'check'}/>
                    </div>
                )}
                <div className={'method-content'}>
                    <span className={'method-item-icon'}/>
                    <div className={'method-label'}>
                        <div className={'method-title'}>Paypal</div>
                        <div className={'method-desc'}>Transfer time: 2 min.</div>
                    </div>
                </div>
            </div>
            <div className={`method-item ${activeMethod === 4 ? 'method-item-active' : ''}`}
                 onClick={() => selectMethod(4)}>
                {activeMethod === 4 && (
                    <div className={'method-item-active-mark'}>
                        <span className={'tri'}/>
                        <span className={'check'}/>
                    </div>
                )}
                <div className={'method-content'}>
                    <span className={'method-item-icon'}/>
                    <div className={'method-label'}>
                        <div className={'method-title'}>Bitcoin</div>
                        <div className={'method-desc'}>Transfer time: 2 min.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Methods;
