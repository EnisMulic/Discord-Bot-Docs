import React from 'react';
import EmbedLink from '../EmbedLink';

const EmbedAuthor = ({ name, url, icon_url }) => {
    if (!name) {
        return null;
    }

    let authorName;
    if (name) {
        authorName = <span className="embed-author-name">{name}</span>;
        if (url) {
            authorName = (
                <EmbedLink href={url} className="embed-author-name">
                    {name}
                </EmbedLink>
            );
        }
    }

    const authorIcon = icon_url ? (
        <img src={icon_url} role="presentation" className="embed-author-icon" />
    ) : null;

    return (
        <div className="embed-author">
            {authorIcon}
            {authorName}
        </div>
    );
};

export default EmbedAuthor;
