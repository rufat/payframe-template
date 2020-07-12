import React, {useState, useEffect, useRef} from 'react';
import StepItem from '../components/StepItem';
import {NEXT_BUTTON, FINISH_BUTTON, EDIT_BUTTON} from '../constants';

function Wizard({heading, headingBold, stepItems, stepSuccess}) {
    const [hasPaymentDone, setHasPaymentDone] = useState(false);

    // You can change the current default step-item index to others that exist in the array below.
    const [activeIndex, setActiveIndex] = useState(1);

    const [maxStep, setMaxStep] = useState(0);
    const [filledSteps, setFilledSteps] = useState([]);
    let steps = useRef();

    // Counting the total numbers of the step items.
    useEffect(() => {
        try {
            setMaxStep(steps.childNodes.length);
        } catch (ex) {
            console.error(ex);
        }
    }, [steps.childNodes])

    // Changes the controller variables to default values for resetting the wizard form.
    window.__reset_form = () => {
        setHasPaymentDone(false);
        setActiveIndex(1);
        setFilledSteps([]);
    }

    // Collecting everything about the step item and returning it as a component.
    const renderSteps = () => {
        let dummyStepsArr = [];
        for (let x in stepItems) {
            dummyStepsArr.push(
                <StepItem
                    key={`stp${x}`}
                    index={Number(x) + 1}
                    activeIndex={activeIndex}
                    filledSteps={filledSteps}
                    maxStep={maxStep}

                    nextStep={nextStep}
                    editStep={editStep}

                    title={stepItems[x].config.title}
                    desc={stepItems[x].config.desc}
                    editable={stepItems[x].config.editable}

                    nextButtonText={NEXT_BUTTON}
                    finishButtonText={FINISH_BUTTON}
                    editButtonText={EDIT_BUTTON}
                >
                    {stepItems[x].component}
                </StepItem>
            )
        }
        return dummyStepsArr;
    }

    // Smooth scrolling to the active step item.
    const scrollToRef = (i) => {
        if (!steps || typeof steps.childNodes[i] === 'undefined') return;
        const ref = steps.childNodes[i - 1];
        ref.scrollIntoView({behavior: 'smooth', inline: "center"});
    }

    // Proceeds to the next step item.
    const nextStep = (i) => {
        setActiveIndex(prevS => prevS + 1);
        scrollToRef(i);
        if (filledSteps.indexOf(i) === -1) {
            setFilledSteps(prevS => [...prevS, i]);
        }
        if(filledSteps.length+1 === maxStep) setHasPaymentDone(true);
    }

    // Changing the active step item index to a specific step-item for editing.
    const editStep = (i) => {
        setActiveIndex(i);
    }

    return (
        <div className={'wizard'}>
            {
                !hasPaymentDone && (
                <>
                    <div className={'page-title'}>{heading} {headingBold && <span>{headingBold}</span>}</div>
                    <div className={'steps'} ref={el => steps = el}>
                        {renderSteps()}
                    </div>
                </>
                )
            }
            {
                // You can use "hasPaymentDone" for other purposes too. If its value is "true", then it indicates that the wizard is completed.
                hasPaymentDone && stepSuccess
            }
        </div>
    )
}

export default Wizard;
