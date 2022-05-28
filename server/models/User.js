const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
        },
        // set commentSchema
        comments: [{
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        }],
    });

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    console.log(password, this.password)
    return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;
