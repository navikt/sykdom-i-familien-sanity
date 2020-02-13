import React from 'react';

function AdminIcon(props) {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
            <title>{'LINE/status/ check list'}</title>
            <defs>
                <path
                    d="M23.5 0a.5.5 0 01.5.5v23a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5V.5A.5.5 0 01.5 0h23zM23 1H1v22h22V1zM10.853 13.147a.5.5 0 010 .707l-5 5a.498.498 0 01-.707 0l-2-2a.5.5 0 01.707-.707L5.5 17.793l4.646-4.646a.5.5 0 01.707 0zM20.5 17a.5.5 0 010 1h-8a.5.5 0 010-1h8zM10.853 4.147a.5.5 0 010 .707l-5 5a.498.498 0 01-.707 0l-2-2a.5.5 0 01.707-.707L5.5 8.793l4.646-4.646a.5.5 0 01.707 0zM20.5 8a.5.5 0 010 1h-8a.5.5 0 010-1h8z"
                    id="admin_prefix__a"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="admin_prefix__b" fill="#fff">
                    <use xlinkHref="#admin_prefix__a" />
                </mask>
                <use fill="#3E3832" xlinkHref="#admin_prefix__a" />
                <g mask="url(#admin_prefix__b)" fill="#3E3832">
                    <path d="M0 24h24V0H0z" />
                </g>
            </g>
        </svg>
    );
}

export default AdminIcon;
