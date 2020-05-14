import React from 'react';

function Header() {
    return (
        <div className={'header'}>
            <div className={'items'}>
                <div className={'logo'}/>
                <select className={'lang'}>
                    <option>Turkish</option>
                    <option>English</option>
                    <option>Arabic</option>
                    <option>Russian</option>
                </select>
            </div>
        </div>
    )
}

export default Header;
