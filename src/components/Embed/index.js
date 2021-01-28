import React from 'react';
import EmbedAuthor from '../EmbedAuthor';
import EmbedColorPill from '../EmbedColorPill';
import EmbedFields from '../EmbedFields';
import EmbedFooter from '../EmbedFooter';
import EmbedImage from '../EmbedImage';
import EmbedThumbnail from '../EmbedThumbnail';
import EmbedTitle from '../EmbedTitle';
import EmbedDescription from '../EmbedDescription';

const Embed = (props) => {
    const {
        color,
        author,
        title,
        url,
        description,
        fields,
        thumbnail,
        image,
        timestamp,
        footer,
    } = props;

    return (
        <div className="accessory">
            <div className="embed-wrapper">
                <EmbedColorPill color={color} />
                <div className="embed embed-rich">
                    <div className="embed-content">
                        <div className="embed-content-inner">
                            <EmbedAuthor {...author} />
                            <EmbedTitle title={title} url={url} />
                            <EmbedDescription content={description} />
                            <EmbedFields fields={fields} />
                        </div>
                        <EmbedThumbnail {...thumbnail} />
                    </div>
                    <EmbedImage {...image} />
                    <EmbedFooter timestamp={timestamp} {...footer} />
                </div>
            </div>
        </div>
    );
};

export default Embed;
