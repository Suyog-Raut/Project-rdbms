const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,
        required: 'This field is required.'
    },
    mobile: {
        type: String
    },
    address: {
        type: String
    },
    employee_id: {
        type: String
    },
    password: {
        type: String
    },
    post: {
        type: String
    }
});

employeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

employeeSchema.statics.findAndValidate = async function (name, password) {
    const foundUser = await this.findOne({fullName: name});
    const result = await bcrypt.compare(password, foundUser.password);
    return result ? foundUser : false;
}

employeeSchema.pre("save", async function (next) {
    if (!this.isModified("password"))
        return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

module.exports = mongoose.model('Employee', employeeSchema);
