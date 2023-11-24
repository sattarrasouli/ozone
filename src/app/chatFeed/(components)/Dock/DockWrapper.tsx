import React from 'react'
import DockButton from './DockButton';
import './styles.scss'

export interface ButtonInfo {
    label: string;
    icon: string;
}

const buttonData: ButtonInfo[] = [
    { label: 'Chats', icon: "/images/icon_comment.svg" },
    { label: 'Calls', icon: "/images/icon_contacts.svg" },
    { label: 'Settings', icon: "/images/icon _settings.svg" },
];

function DockWrapper() {

    return (
        <div className='dockWrapper'>
            {
                buttonData.map((buttonSpec, index) =>
                    <DockButton key={index} buttonSpec={buttonSpec} />
                )
            }
        </div>
    )
}

export default DockWrapper