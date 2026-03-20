const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { createTokenForUser } = require('../services/authentication');

const userSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
        },
    },
    {timestamps:true}
);

userSchema.pre('save', async function (next){
    const user = this;

    if(!user.isModified("password")) return next();

    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;

});

userSchema.static('matchPasswordAndGenerateToken', async function (email, password) {
    const user = await this.findOne({email});

    if(!user) throw new Error('User Not Found!');

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) throw new Error('Incorrect Password!');

    const token = createTokenForUser(user);
    return {
        token,
        user,
    }
});

const USER = model('user', userSchema);

module.exports = USER;