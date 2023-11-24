"use client"
import React from 'react'
import './styles.scss'
import { useRouter } from 'next/navigation';

function ChatCard() {
    const router = useRouter();

    const handleChatClick = (chatId: string) => {
        router.push(`/chat#${chatId}`);
    };

    return (
        <div className='chatCard' onClick={() => handleChatClick("23id")}>
            <div className='userInfo'>
                <div className='avatar'>
                    <img src='./images/avatar.jpeg' alt='people-avatar' width={`100%`} height={`100%`} />
                </div>
                <div className='nameAndLatestMsg'>
                    <p>person's name</p>
                    <p>latest message</p>
                </div>
            </div>
            <div className='time'>
                <p>19:33</p>
            </div>
        </div>
    )
}

export default ChatCard