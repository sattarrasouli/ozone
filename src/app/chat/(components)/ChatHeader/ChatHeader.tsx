import React, { ReactNode } from 'react'
import './styles.scss'

interface ChatHeaderProps {
    children: ReactNode;
}

function ChatHeader({ children }: ChatHeaderProps) {
    return (
        <div className='chatHeader'>
            {children}
        </div>
    )
}

export default ChatHeader