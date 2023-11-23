import React from 'react'
import './styles.scss'

const NEW_CHAT_ICON = './images/NewChat.svg'

function NewChatButton() {
    return (
        <button className='newChatButton'>
            <img src={NEW_CHAT_ICON} alt='new-chat' width={`100%`} />
        </button>
    )
}

export default NewChatButton