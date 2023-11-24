import React from 'react'
import './styles.scss'

interface IconButtonProps {
    buttonSpec: {
        icon: string;
        alt: string;
        onClick?: (() => void | undefined) | undefined;
    };
}

function IconButton({ buttonSpec }: IconButtonProps) {
    const { icon, alt, ...otherProps } = buttonSpec;
    return (
        <button className='iconButton' {...otherProps}>
            <img src={icon} alt={alt} width={`100%`} height={`100%`} />
        </button>
    )
}

export default IconButton