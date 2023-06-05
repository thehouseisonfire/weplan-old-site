const env = require('../.env.json');
const axios = require('axios');
const { createCard: createCardMutation } = require('./mutations');

const defaultQueryBody = {
    operationName: null,
    query: '',
    variables: null,
};

const baseRequest = async (
    body = {},
    host = env.pipefyHost,
    token = env.pipefyToken
) => {
    const defaultMethodToGraphqlRequest = 'POST';
    const baseConfigurationRequest = await axios({
        url: host,
        method: defaultMethodToGraphqlRequest,
        data: body,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return baseConfigurationRequest;
};

const createCard = async (cardSettings, data) => {
    try {
        const body = {
            ...defaultQueryBody,
            query: createCardMutation(cardSettings, data),
        };
        const record = await baseRequest(body);
        return record;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createCard,
};
