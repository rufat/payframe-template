import React from 'react';

function NotifyBox(props) {
    const {type, text} = props;
    return (
        <div className={`notify notify-${type || 'warn'}`}>
            <img src={`images/notify-icons/${type || 'warn'}.svg`} alt={'icon'}/>
            {text || 'No message.'}
        </div>
    )
}

export default NotifyBox;
