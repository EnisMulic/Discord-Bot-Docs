import React from 'react';
import Moment from 'moment';

const EmbedFooter = ({ timestamp, text, icon_url }) => {
    if (!text && !timestamp) {
        return null;
    }

    // pass null, since undefined will make moment(...) return the current date/time
    let time = Moment(timestamp !== undefined ? timestamp : null);
    time = time.isValid() ? time.format('ddd MMM Do, YYYY [at] h:mm A') : null;

    const footerText = [text, time].filter(Boolean).join(' | ');
    const footerIcon =
        text && icon_url ? (
            <img
                src={icon_url}
                className="embed-footer-icon"
                role="presentation"
                width="20"
                height="20"
            />
        ) : null;

    return (
        <div>
            {footerIcon}
            <span className="embed-footer">{footerText}</span>
        </div>
    );
};

export default EmbedFooter;
