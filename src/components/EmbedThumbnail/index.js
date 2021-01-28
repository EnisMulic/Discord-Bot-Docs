import React from 'react';

const EmbedThumbnail = ({ url }) => {
    if (!url) {
        return null;
    }

    return (
        <img
            src={url}
            role="presentation"
            className="embed-rich-thumb"
            style={{ maxWidth: 80, maxHeight: 80 }}
        />
    );
};

export default EmbedThumbnail;
