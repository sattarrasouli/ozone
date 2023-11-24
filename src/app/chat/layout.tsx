import { useSearchParams } from 'next/navigation'
import React from 'react'
import ChatHeader from '../chatFeed/(components)/ChatHeader/ChatHeader'
import HeaderButtons from './(components)/header/HeaderButtons'

function layout() {

    return (
        <>
            <ChatHeader >
                <HeaderButtons />
            </ChatHeader>
        </>
    )
}

export default layout