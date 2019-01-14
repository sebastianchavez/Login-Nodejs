const mongoose = require('mongoose') //db
const bcrypt = require('bcrypt-nodejs') //encrypt
const { Schema } = mongoose

const userSchema = new Schema({
    email: String,
    password: String
})

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('users', userSchema)