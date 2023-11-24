import React from 'react'
import "./styles.scss"

interface IChatMessageProps {
    message: string;
    isSent: boolean;
}

function Message({ message, isSent }: IChatMessageProps) {

    return (
        <div className={`message ${isSent ? 'sent' : 'received'}`}>
            <p>{message}</p>
            <div className='time-section'>
                <small>11:09</small>
                <img src='/images/read-sign.svg' alt='read-icon' width={`14px`} height={`7px`} />
            </div>
        </div>
    )
}

export default Message