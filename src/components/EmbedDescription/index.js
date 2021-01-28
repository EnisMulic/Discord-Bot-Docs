import React from 'react';
import { parseAllowLinks } from '../../utility/markdown';

const EmbedDescription = ({ content }) => {
    if (!content) {
        return null;
    }

    return (
        <div className="embed-description markup">
            {parseAllowLinks(content)}
        </div>
    );
};

export default EmbedDescription;
