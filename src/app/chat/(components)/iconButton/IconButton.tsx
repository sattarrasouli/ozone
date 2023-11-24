import React from 'react'
import './styles.scss'
import Image from 'next/image';

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
            <Image src={icon} alt={alt} width={20} height={20} />
        </button>
    )
}

export default IconButton