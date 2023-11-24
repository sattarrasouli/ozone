"use client"
import { useRouter } from 'next/navigation';
import IconButton from '../iconButton/IconButton';
import "./styles.scss";
import Image from 'next/image';


export interface ButtonInfo {
    alt: string;
    icon: string;
}

const buttonData: ButtonInfo[] = [
    { alt: 'call-icon', icon: "/images/call.svg" },
    { alt: 'video-icon', icon: "/images/video.svg" },
    { alt: 'vector-icon', icon: "/images/Vector.svg" },
];

function HeaderButtons() {

    const router = useRouter();

    const handleBackToFeed = () => {
        router.push(`/chatFeed`);
    };

    const BACK_BUTTON = { alt: 'back-icon', icon: "/images/arrow-back.svg", onClick: handleBackToFeed }

    return (
        <div className='chatScreenHeader'>
            <div className='leftSide'>
                <IconButton buttonSpec={BACK_BUTTON} />
                <div className='name-avatar-section'>
                    <Image src='/images/avatar.jpeg' alt='user-avatar' width={30} height={30} />
                    <p>test</p>
                </div>
            </div>
            <div className='rightSide'>
                {
                    buttonData.map((butttonSpec, index) =>
                        <IconButton key={index} buttonSpec={butttonSpec} />
                    )
                }
            </div>
        </div>
    )
}

export default HeaderButtons