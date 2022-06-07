const jwt = require('jsonwebtoken');

// set token secret and expiration 
const secret = 'mySuperSecretPassword';
const expiration = '2h';

module.exports = {
    // function for our authenticated routes
    authMiddleware: function (obj) {

        let { req, res, next } = obj;

        // allows token to be sent via  req.query or headers
        let token = (req.query || {}).token || (req.headers || {}).authorization;


        if ((req.headers || {}).authorization) {
            token = token.split(' ').pop().trim();

        }


        if (!token) {
            return req;
        }

        // verify token and get user data out of it
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');

        }
        return req;

    },
    signToken: function ({ email, _id }) {
        const payload = { email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};
