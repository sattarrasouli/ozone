import React from 'react'
import './styles.scss'
import { ButtonInfo } from './DockWrapper'
import Image from 'next/image'

function DockButton({ buttonSpec }: { buttonSpec: ButtonInfo }) {
    return (
        <button className='dockButton'>
            <Image src={buttonSpec.icon} alt={`icon-${buttonSpec.label}`} width={24} height={24} />
            <p>{buttonSpec.label}</p>
        </button>
    )
}

export default DockButton