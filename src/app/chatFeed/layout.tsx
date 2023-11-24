import React from 'react'

import ChatHeader from './(components)/ChatHeader/ChatHeader'
import DockWrapper from './(components)/Dock/DockWrapper'
import NewChatButton from './(components)/NewChatButton/NewChatButton'
import SearchBar from './(components)/SearchBarInput/SearchBarInput'
import TabButtonWrapper from './(components)/TabButton/TabButtonWrapper'
import './styles.scss'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='layout'>
            <ChatHeader >
                <SearchBar />
                <TabButtonWrapper />
            </ChatHeader>
            {children}
            <NewChatButton />
            <DockWrapper />
        </div>
    )
}

export default layout