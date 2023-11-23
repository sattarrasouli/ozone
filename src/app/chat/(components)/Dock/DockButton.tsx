import React from 'react'
import { ButtonInfo } from './DockWrapper'
import './styles.scss'

function DockButton({ buttonSpec }: { buttonSpec: ButtonInfo }) {
    return (
        <button className='dockButton'>
            <img src={buttonSpec.icon} alt={`icon-${buttonSpec.label}`} width={`100%`} height={`100%`} />
            <p>{buttonSpec.label}</p>
        </button>
    )
}

export default DockButton