import React from 'react';

function Header() {
    return (
        <div className={'header'}>
            <div className={'items'}>
                <div className={'logo'}/>
                <select className={'lang'}>
                    <option>English (US)</option>
                    <option>Italian</option>
                    <option>French</option>
                    <option>Spanish</option>
                </select>
            </div>
        </div>
    )
}

export default Header;
