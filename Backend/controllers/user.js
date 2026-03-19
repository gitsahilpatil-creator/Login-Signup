const USER = require('../model/user');

async function handleSignUp (req, res) {
    const {name, email, password} = req.body;
    
    await USER.create({
        name: name,
        email: email,
        password: password,
    });

    return res.json({message: 'User Created'});
}

module.exports = {
    handleSignUp,
}