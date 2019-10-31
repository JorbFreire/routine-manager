const jwt = require('jsonwebtoken');
const authConfig = require('../../../config/auth');

function genToken(id){
    return jwt.sign({id}, authConfig.secret, {
        expiresIn: 86400    // 1 dia
    })
}

module.exports = genToken;