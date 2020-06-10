import React from 'react';

function StepItem(props) {
    const {children, index, maxStep, activeIndex, filledSteps, title, desc, editable, nextStep, editStep} = props;
    const expanded = activeIndex === index;
    const filled = filledSteps.indexOf(index) !== -1;

    const numberStatus = () => {
        if(expanded) {
           return 'step-number-active';
        } else if(filled) {
            return 'step-number-filled';
        } else if(!expanded) {
            return 'step-number-inactive';
        }
    }

    const titleStatus = () => {
        if(filled && !expanded) {
            return 'step-title-filled';
        } else if (!expanded) {
            return 'step-title-collapsed';
        }
    }

    return (
        <div className={`step-item ${!expanded ? 'collapsed' : ''}`}>
            <div className={'step-header'}>
                <div className={'step-left'}>
                    <span className={`step-number ${numberStatus()}`}>{index}</span>
                    <div className={'step-text'}>
                        <div className={`step-title ${titleStatus()}`}>{title}</div>
                        {expanded && <div className={'step-desc'}>{desc}</div>}
                    </div>
                </div>
                {editable && (!expanded && filled && <span className={'step-edit-btn'} onClick={() => editStep(index)}>Düzenle</span>)}
            </div>
            {
                expanded && (
                    <div className={'step-content'}>
                        {children}
                    </div>
                )
            }
            {
                expanded && (
                    <div className={'step-bottom'}>
                        <span>Adım {index} / {maxStep}</span>
                        {index === maxStep && <button onClick={() => nextStep(activeIndex)}>Bitir</button>}
                        {index !== maxStep && <button onClick={() => nextStep(activeIndex)}>Devam</button>}
                    </div>
                )
            }
        </div>
    )
}

export default StepItem;
