"use client"
import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import "./styles.scss"
import { useMessageContext } from '../AddMessageHook/AddMessageHook';

function MessageWrapper() {
    const { messages, addMessage } = useMessageContext();

    const chatContainer: HTMLElement | null = document.getElementById('chat-container')
    if (chatContainer !== null) {
        chatContainer.scrollTop = chatContainer.scrollHeight
    }

    const dummyRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (dummyRef.current) {
            dummyRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages]);


    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsVisible(scrollY < document.body.scrollHeight - window.innerHeight - 100)
        };
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    };

    return (
        <div id="chat-container" className='messageWrapper'>
            {messages.map((msg, index) => (
                <Message key={index} message={msg.text} isSent={msg.isSent} />
            ))}
            <button
                className={`scroll-to-bottom-button ${isVisible ? 'visible' : ''}`}
                onClick={scrollToBottom}
            >
                <img src='/images/down-arrow.svg' alt='arrow-icon' width={`20px`} height={`20px`} />
            </button>
            <div ref={dummyRef} style={{ height: '1px', width: '1px' }}></div>
        </div>
    )
}

export default MessageWrapper