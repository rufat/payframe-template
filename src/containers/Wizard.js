import React, {useState, useEffect, useRef} from 'react';
import StepItem from '../components/steps/StepItem';

function Wizard() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [maxStep, setMaxStep] = useState(0);
    const [filledSteps, setFilledSteps] = useState([]);
    let steps = useRef();

    useEffect(() => {
        setMaxStep(steps.childNodes.length)
    }, [steps.childNodes])

    const scrollToRef = (i) => {
        if(typeof steps.childNodes[i] === 'undefined') return;
        const ref = steps.childNodes[i];
        ref.scrollIntoView({ behavior: 'smooth', block: "center"});
    }

    const nextStep = (i) => {
        setActiveIndex(prevS => prevS+1);
        scrollToRef(i);
        if(filledSteps.indexOf(i) === -1) {
            setFilledSteps(prevS => [...prevS, i]);
        }
    }

    const editStep = (i) => {
        setActiveIndex(i);
    }

    return (
        <div className={'wizard'}>
            <div className={'page-title'}><span>Masterpay</span> Para Yatırma</div>
            <div className={'steps'} ref={el => steps = el}>
                <StepItem
                    index={1}
                    activeIndex={activeIndex}
                    filledSteps={filledSteps}
                    maxStep={maxStep}
                    nextStep={nextStep}
                    editStep={editStep}
                    title={'Yatırım yöntemi'}
                    desc={'Para yatırma seçenekleri sağlayıcınıza göre değişiklik gösterebilir.'}
                >
                    A
                </StepItem>
                <StepItem
                    index={2}
                    activeIndex={activeIndex}
                    filledSteps={filledSteps}
                    maxStep={maxStep}
                    nextStep={nextStep}
                    editStep={editStep}
                    title={'Banka seçiniz'}
                    desc={'Müşterisi olduğunuz bankalardan birini seçiniz.'}
                >
                    B
                </StepItem>
                <StepItem
                    index={3}
                    activeIndex={activeIndex}
                    filledSteps={filledSteps}
                    maxStep={maxStep}
                    nextStep={nextStep}
                    editStep={editStep}
                    title={'Transfer miktarı'}
                    desc={'Yatırım yapacağınız miktarı giriniz.'}
                >
                    C
                </StepItem>
                <StepItem
                    index={4}
                    activeIndex={activeIndex}
                    filledSteps={filledSteps}
                    maxStep={maxStep}
                    nextStep={nextStep}
                    editStep={editStep}
                    title={'Transfer işlemi'}
                    desc={'Lütfen transfer işlemi seçiniz.'}
                >
                    D
                </StepItem>
            </div>
        </div>
    )
}

export default Wizard;
