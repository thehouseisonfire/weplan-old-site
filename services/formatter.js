const formatCardSettingsToSendToPipe = (settings = {}) => {
    return Object.entries(settings).reduce((formatted, currentSetting, currentIndex, settings) => {
        const [ key, value ] = currentSetting;
        formatted += `${key}: ${value}`;
        if (currentIndex != (settings.length - 1)) formatted += ', ';
        return formatted;
    }, '');
};

const formatCardToSendToPipe = (fields) => {
    return fields.reduce((formattedFields, field) => {
        const { field: { id }, value, date_value } = field;
        return formattedFields += `{ field_id: "${id}", field_value: "${date_value ? date_value : value}" }, `;
    }, '');
};

module.exports = {
    formatCardSettingsToSendToPipe,
    formatCardToSendToPipe,
};
