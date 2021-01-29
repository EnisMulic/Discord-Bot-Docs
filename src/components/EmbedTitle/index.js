import React from 'react';
import EmbedLink from '../EmbedLink';

import { parseEmbedTitle } from '../../utility/markdown';

const EmbedTitle = ({ title, url }) => {
    if (!title) {
        return null;
    }

    let computed = (
        <div className={'embed-title'}>{parseEmbedTitle(title)}</div>
    );
    if (url) {
        computed = (
            <EmbedLink href={url} className="embed-title">
                {parseEmbedTitle(title)}
            </EmbedLink>
        );
    }

    return computed;
};

export default EmbedTitle;
