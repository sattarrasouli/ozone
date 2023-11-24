import React from 'react'
import './styles.scss'
import Image from 'next/image'

const NEW_CHAT_ICON = './images/NewChat.svg'

function NewChatButton() {
    return (
        <button className='newChatButton'>
            <Image src={NEW_CHAT_ICON} alt='new-chat' width={60} height={60} />
        </button>
    )
}

export default NewChatButton