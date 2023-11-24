import React from 'react'
import './styles.scss'
import TabButton from './TabButton';

type TabButtonLabel = {
    key: number;
    label: string;
};

const tabLabels: TabButtonLabel[] = [
    { key: 1, label: 'Chats' },
    { key: 2, label: 'Calls' },
];

function TabButtonWrapper() {

    return (
        <div className='tabButtonsWrapper'>
            {
                tabLabels.map((item) =>
                    <TabButton key={item.key} label={item.label} />
                )
            }
        </div>
    )
}

export default TabButtonWrapper