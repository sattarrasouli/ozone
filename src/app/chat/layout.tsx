import React from 'react'
import SearchBar from './(components)/SearchBarInput/SearchBarInput'
import ChatHeader from './(components)/ChatHeader/ChatHeader'
import TabButtonWrapper from './(components)/TabButton/TabButtonWrapper'
import DockWrapper from './(components)/Dock/DockWrapper'
import './styles.scss'
import NewChatButton from './(components)/NewChatButton/NewChatButton'
import ChatFeed from './(components)/ChatFeed/ChatFeed'

function layout() {
    return (
        <div className='layout'>
            <ChatHeader >
                <SearchBar />
                <TabButtonWrapper />
            </ChatHeader>
            <ChatFeed />
            <NewChatButton />
            <DockWrapper />
        </div>
    )
}

export default layout