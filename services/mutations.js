const createCard = (cardSettings, fieldsAttributes) => {
    return `mutation {
        createCard(
            input: {
                ${cardSettings},
                fields_attributes: [${fieldsAttributes}]
            }
        ) {
            card {
                id
            }
        }
    }`;
};

module.exports = {
    createCard,
};
