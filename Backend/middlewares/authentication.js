const { validateToken } = require("../services/authentication");

function requireAuth (req, res, next){
    const token = req.cookies.token;

    if(!token) return res.status(401).json({message: 'Unauthorized'});

    try {
        const userPayload = validateToken(token);
        req.user = userPayload;
        next();
    } catch (error) {
        return res.status(401).json({message: 'Invalid token'});
    }
}

module.exports = {
    requireAuth,
}