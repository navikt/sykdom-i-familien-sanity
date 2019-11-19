import * as React from 'react';

const Message = ({ children }) => (
    <div
        style={{
            margin: '1rem 0',
            padding: '1rem 2rem',
            border: '1px solid #c0c0c0',
            backgroundColor: '#f2f2f2',
            borderRadius: '.2rem',
            display: 'flex',
            flexFlow: 'column',
            minWidth: '20rem'
        }}>
        {children}
    </div>
);

export default Message;
