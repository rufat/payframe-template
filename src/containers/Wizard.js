import React, {useState} from 'react';
import StepItem from '../components/steps/StepItem';

function Wizard() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [filledSteps, setFilledSteps] = useState([]);

    const nextStep = (i) => {
        setActiveIndex(prevS => prevS+1);
        setFilledSteps(prevS => [...prevS, i]);
    }

    const backStep = () => {
        setActiveIndex(prevS => prevS-1);
    }

    const editStep = (i) => {
        setActiveIndex(i);
    }

    return (
        <div className={'wizard'}>
            <div className={'page-title'}><span>Masterpay</span> Para Yatırma</div>
            <div className={'steps'}>
                <StepItem
                    index={0}
                    expanded={activeIndex === 0}
                    filled={filledSteps.indexOf(0) !== -1}
                    editStep={editStep}
                    title={'Para Yatırma Yöntemi'}
                    desc={'Para yatırma seçenekleri sağlayıcınıza göre değişiklik gösterebilir.'}
                >
                    asd
                    <button onClick={() => nextStep(0)}>devam</button>
                </StepItem>
                <StepItem
                    index={1}
                    expanded={activeIndex === 1}
                    filled={filledSteps.indexOf(1) !== -1}
                    editStep={editStep}
                    title={'sada'}
                    desc={'Padsadişiklik gösterebilir.'}
                >
                    123
                    <button onClick={() => backStep()}>düzenle</button>
                </StepItem>
            </div>
        </div>
    )
}

export default Wizard;
