import * as React from 'react';

const YtelsePageIcon = (props) => {
    const fill = props.isPublic === false ? "#3385D1" : "#000000";

    return (
        <span style={{transform: props.isPublic ? undefined: "rotate(25deg)"}}>
        <svg
            fill="currentColor"
            height="1em"
            width="1em"
            viewBox="0 0 40 40"
            className="prefix__sanity-studio__preview-fallback-icon"
            style={{
                verticalAlign: 'middle'
            }}
            >
            <path
                fill={fill}
                d="M35.8 8.5q.6.6 1 1.7t.5 1.9v25.8q0 .8-.6 1.5t-1.6.6h-30q-.9 0-1.5-.6T3 37.9V2.1q0-.8.6-1.5T5.1 0h20q.9 0 2 .4t1.7 1.1zM25.9 3v8.4h8.4q-.3-.6-.5-.9l-7-7q-.3-.2-.9-.5zm8.5 34.1V14.3h-9.3q-.9 0-1.5-.6t-.6-1.6V2.9H5.9v34.2h28.5z"
            />
        </svg></span>
    );
};

export default YtelsePageIcon;
