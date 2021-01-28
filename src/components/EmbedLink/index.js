import React from 'react';

const EmbedLink = ({ children, ...props }) => {
    return (
        <a target="_blank" rel="noreferrer" {...props}>
            {children}
        </a>
    );
};

export default EmbedLink;
