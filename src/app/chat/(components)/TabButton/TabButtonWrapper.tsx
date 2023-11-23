import React from 'react'
import './styles.scss'
import TabButton from './TabButton';

type TabButtonLabel = 'Chats' | 'Calls';
const tabLabels: TabButtonLabel[] = ['Chats', 'Calls'];

function TabButtonWrapper() {

    return (
        <div className='tabButtonsWrapper'>
            {
                tabLabels.map((label) =>
                    <TabButton label={label} />
                )
            }
        </div>
    )
}

export default TabButtonWrapper