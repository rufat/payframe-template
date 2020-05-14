import React from 'react';

function StepItem(props) {
    const numberStatus = () => {
        if(props.expanded) {
           return 'step-number-active';
        } else if(props.filled) {
            return 'step-number-filled';
        } else if(!props.expanded) {
            return 'step-number-inactive';
        }
    }

    const titleStatus = () => {
        if(props.filled && !props.expanded) {
            return 'step-title-filled';
        } else if (!props.expanded) {
            return 'step-title-collapsed';
        }
    }

    return (
        <div className={`step-item ${!props.expanded ? 'collapsed' : ''}`}>
            <div className={'step-header'}>
                <div className={'step-left'}>
                    <span className={`step-number ${numberStatus()}`}>{props.index}</span>
                    <div className={'step-text'}>
                        <div className={`step-title ${titleStatus()}`}>{props.title}</div>
                        {props.expanded && <div className={'step-desc'}>{props.desc}</div>}
                    </div>
                </div>
                {!props.expanded && props.filled && <span className={'step-edit-btn'} onClick={() => props.editStep(props.index)}>Düzenle</span>}
            </div>
            {
                props.expanded && <div className={'step-content'}>
                    {props.children}
                </div>
            }
        </div>
    )
}

export default StepItem;
