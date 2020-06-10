import React, {useState, useEffect, useRef} from 'react';
import StepItem from '../../components/steps/StepItem';
import {
    STEP_METHODS,
    STEP_BANKS,
    STEP_BANK_AUTH,
    STEP_AMOUNT,
    STEP_VERIFY,
    STEP_ACCOUNT,
    STEP_TRANSFER
} from '../../constants';
import Methods from './Methods/';
import Banks from './Banks/';
import BankAuth from './BankAuth/';
import Amount from './Amount/';
import Verify from './Verify/';
import Transfer from './Transfer/';
import Account from "./Account";

function Index() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [maxStep, setMaxStep] = useState(0);
    const [filledSteps, setFilledSteps] = useState([]);
    const stepPages = [STEP_METHODS, STEP_BANKS, STEP_BANK_AUTH, STEP_AMOUNT, STEP_VERIFY, STEP_ACCOUNT, STEP_TRANSFER];
    let steps = useRef();

    useEffect(() => {
        setMaxStep(steps.childNodes.length)
    }, [steps.childNodes])

    const getStepDOM = (n) => {
        switch (n) {
            case STEP_METHODS.name:
                return <Methods/>;
            case STEP_BANKS.name:
                return <Banks/>
            case STEP_BANK_AUTH.name:
                return <BankAuth/>
            case STEP_AMOUNT.name:
                return <Amount/>
            case STEP_VERIFY.name:
                return <Verify/>
            case STEP_ACCOUNT.name:
                return <Account/>
            case STEP_TRANSFER.name:
                return <Transfer/>
            default:
                return <>No step.</>;
        }
    }

    const renderSteps = () => {
        let dummyStepsArr = [];
        for (let x in stepPages) {
            dummyStepsArr.push(
                <StepItem
                    key={x + 'step'}
                    index={Number(x) + 1}
                    activeIndex={activeIndex}
                    filledSteps={filledSteps}
                    maxStep={maxStep}
                    nextStep={nextStep}
                    editStep={editStep}
                    title={stepPages[x].title}
                    desc={stepPages[x].desc}
                    editable={stepPages[x].editable}
                >
                    {getStepDOM(stepPages[x].name)}
                </StepItem>
            )
        }
        return dummyStepsArr;
    }

    const scrollToRef = (i) => {
        if (typeof steps.childNodes[i] === 'undefined') return;
        const ref = steps.childNodes[i - 1];
        ref.scrollIntoView({behavior: 'smooth', inline: "center"});
    }

    const nextStep = (i) => {
        setActiveIndex(prevS => prevS + 1);
        scrollToRef(i);
        if (filledSteps.indexOf(i) === -1) {
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
                {renderSteps()}
            </div>
        </div>
    )
}

export default Index;
