"use client"
import React from 'react'
import { MessageProvider } from './(components)/AddMessageHook/AddMessageHook'
import ChatScreenHeader from './(components)/ChatScreenHeader/ChatScreenHeader'
import Footer from './(components)/footer/Footer'
import HeaderButtons from './(components)/header/HeaderButtons'
import './styles.scss'
function layout({ children }: { children: React.ReactNode }) {

    return (
        <div className='layoutChatScreen'>
            <MessageProvider>
                <ChatScreenHeader >
                    <HeaderButtons />
                </ChatScreenHeader>
                {children}
                <Footer />
            </MessageProvider>
        </div>
    )
}

export default layout