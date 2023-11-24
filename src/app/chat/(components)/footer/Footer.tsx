"use client"
import React, { useState } from 'react'
import IconButton from '../iconButton/IconButton';
import "./styles.scss"
import { useMessageContext } from '../AddMessageHook/AddMessageHook';

type IconButton = {
    alt: string;
    icon: string;
};

interface Message {
    text: string;
    isSent: boolean;
}
function Footer() {
    const [message, setMessage] = useState('')

    const createIconButton = (alt: string, icon: string): IconButton => ({ alt, icon });
    const EmojiButton: IconButton = createIconButton('back-icon', '/images/emo.svg');
    const AttachmentButton: IconButton = createIconButton('attachment-icon', '/images/attachment.svg');
    const CameraButton: IconButton = createIconButton('camra-icon', '/images/camra.svg');


    const { messages, addMessage } = useMessageContext();
    const [inputMessage, setInputMessage] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputMessage.trim() !== '') {
            const newMessage: Message = {
                text: inputMessage,
                isSent: true,
            };
            addMessage(newMessage);
            setInputMessage('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className='chatScreenFooter'>
            <div className='inputSection'>
                <IconButton buttonSpec={EmojiButton} />
                <input
                    type="text"
                    value={inputMessage}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    placeholder='Message'
                />
                <IconButton buttonSpec={AttachmentButton} />
                <IconButton buttonSpec={CameraButton} />
            </div>
            <div className='mic-send-section'>
                {
                    inputMessage ?
                        <button onClick={handleSendMessage}>
                            <img src='/images/send.svg' alt='mic-icon' />
                        </button>
                        :
                        <button>
                            <img src='/images/audio.svg' alt='mic-icon' />
                        </button>
                }
            </div>
        </div>
    )
}

export default Footer