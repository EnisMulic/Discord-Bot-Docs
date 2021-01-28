import React from 'react';
import EmbedField from '../EmbedField';

const EmbedFields = ({ fields }) => {
    if (!fields) {
        return null;
    }

    return (
        <div className="embed-fields">
            {fields.map((f, i) => (
                <EmbedField key={i} {...f} />
            ))}
        </div>
    );
};

export default EmbedFields;
