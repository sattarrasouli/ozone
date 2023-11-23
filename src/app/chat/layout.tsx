import React from 'react'
import SearchBar from './(components)/SearchBarInput/SearchBarInput'
import ChatHeader from './(components)/ChatHeader/ChatHeader'
import TabButtonWrapper from './(components)/TabButton/TabButtonWrapper'

function layout() {
    return (
        <>
            <ChatHeader >
                <SearchBar />
                <TabButtonWrapper />
            </ChatHeader>
        </>
    )
}

export default layout