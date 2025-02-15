const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = mongoose.model('User', userSchema);


const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            min: [3, 'First name must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            min: [3, 'Last name must be at least 3 characters long'],
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: [6, 'Email must be at least 6 characters long'],
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    soketId: {
        type: String,
    },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.TOKEN_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const User = mongoose.model('user', userSchema);

module.exports = userModel;