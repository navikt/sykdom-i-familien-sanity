import React from 'react';

function HomeIcon(props) {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
            <path
                d="M3.5 13.5v10h6v-7h5v7h6V14m-20-1L12 1.5 23.5 13M16 2.5h3.5V6"
                stroke="#3E3832"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                fill="none"
            />
        </svg>
    );
}

export default HomeIcon;
