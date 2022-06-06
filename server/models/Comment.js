const { Schema, model } = require('mongoose');

// commentSchema
const commentSchema = new Schema({

    commentAuthor: {
        type: String,
        trim: true,
    },
    commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
