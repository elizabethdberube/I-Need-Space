const db = require('../config/connection');
const { User, Comment } = require('../models');

const commentData = require('./commentData.json');
const userData = require('./userData.json');

// seeds User and Comment model
db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Comment.deleteMany({});



        for (let i = 0; i < userData.length; i++) {
            const user = userData[i];
            await User.create(user);
        }


        for (let i = 0; i < commentData.length; i++) {
            const { _id, commentAuthor } = await Comment.create(commentData[i]);
            const user = await User.findOneAndUpdate(
                { username: commentAuthor },
                {
                    $addToSet:
                    {
                        comments: _id,
                    },
                }
            );
        }
        console.log('done!')
    } catch (err) {
        console.log('problem');

    }
    process.exit(0);
});