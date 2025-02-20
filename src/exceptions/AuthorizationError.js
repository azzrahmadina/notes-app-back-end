/* eslint-disable linebreak-style */
/* eslint-disable indent */

const ClientError = require('./ClientError');

class AuthorizationError extends ClientError {
    constructor(message) {
        super(message, 403);
        this.name = 'AuthorizationError';
    }
};

module.exports = AuthorizationError;