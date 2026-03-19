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

    const user = await USER.findOne({email});

    if(!user || user.password !== password){
        return res.status(400).json({message: 'Invalid Credentials'});
    }

    return res.status(200).json({message: 'Login Successful'});
}

module.exports = {
    handleSignUp,
    handleLogin,
}