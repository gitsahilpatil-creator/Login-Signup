const USER = require('../model/user');

async function handleSignUp (req, res) {
    const {name, email, password} = req.body;

    await USER.create({
        name: name,
        email: email,
        password: password,
    });

    return res.status(200).json({message: 'User Created'});
}

async function handleLogin (req, res) {
    const {email, password} = req.body;

    try {
        const {token, user} = await USER.matchPasswordAndGenerateToken(email, password);
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'Lax',
            maxAge: 60 * 60 * 1000,
        });
        return res.status(200).json({
            message: 'Login Successful',
            user: {
                email: user.email,
                _id: user._id,
            }
        });
    } catch (error) {
        return res.status(400).json({message: 'Invalid Credentials'});
    }
}

async function handleProfile (req, res) {
    return res.json({
        message: 'Logged in to account',
        user: req.user,
    });
}

module.exports = {
    handleSignUp,
    handleLogin,
    handleProfile,
}