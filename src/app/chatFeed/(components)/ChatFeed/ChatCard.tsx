"use client"
import React from 'react'
import './styles.scss'
import { useRouter } from 'next/navigation';

interface UserInfoProps {
    item: {
        userAvatar: string;
        title: string;
        url: string;
        id: number;
    };
}
function ChatCard({ item }: UserInfoProps) {
    const { title, url, id } = item;

    const router = useRouter();

    const handleChatClick = (chatId: number) => {
        router.push(`/chat#${chatId}`);
    };

    const originalDate = new Date();
    const hours = originalDate.getHours();
    const minutes = originalDate.getMinutes();


    return (
        <div className='chatCard' onClick={() => handleChatClick(id)}>
            <div className='userInfo'>
                <div className='avatar'>
                    <img src={url} alt='people-avatar' width={`100%`} height={`100%`} />
                </div>
                <div className='nameAndLatestMsg'>
                    <p>{title}</p>
                    <p>{title}</p>
                </div>
            </div>
            <div className='time'>
                <p>{hours}:{minutes}</p>
            </div>
        </div>
    )
}

export default ChatCard