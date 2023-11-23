import React from 'react'
import './styles.scss'

function ChatCard() {
    return (
        <div className='chatCard'>
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