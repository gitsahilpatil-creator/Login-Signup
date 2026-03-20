const JWT = require('jsonwebtoken');

const secret = '$$1234$$';

function createTokenForUser(user){
    const payload = {
        _id: user._id,
        email: user.email,
    }

    return JWT.sign(payload, secret, {expiresIn: '1h'});
}

function validateToken(token){
    const payload = JWT.verify(token, secret);

    return payload;
}

module.exports = {
    createTokenForUser,
    validateToken,
}