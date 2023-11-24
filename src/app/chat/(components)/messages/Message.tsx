import React from 'react'
import "./styles.scss"
import Image from 'next/image';

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
                <Image src='/images/read-sign.svg' alt='read-icon' width={14} height={7} />
            </div>
        </div>
    )
}

export default Message