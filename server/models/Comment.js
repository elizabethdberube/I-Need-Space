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
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
