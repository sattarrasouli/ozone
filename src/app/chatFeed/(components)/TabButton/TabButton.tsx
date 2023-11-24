import React from 'react'

function TabButton({ label }: { label: string }) {
    return (
        <button className='buttonTab'>{label}</button>
    )
}

export default TabButton