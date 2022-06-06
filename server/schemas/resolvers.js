const { AuthenticationError } = require('apollo-server-express');
const { Comment, User } = require('../models');
const { signToken } = require('../../server/utils/auth');
const { roverFHAZ, roverNAVCAM, roverRHAZ } = require('../helperAPI/getRover');
const { dailyPic } = require('../helperAPI/getPic');
const { search } = require('../helperAPI/getTwitter');


const resolvers = {

    Query: {

        users: async () => {
            return User.find({}).populate('comments');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('comments');
        },
        getComments: async (parent) => {

            return Comment.find({}).sort({ createdAt: -1 });
        },
        comment: async (parent, { commentId }) => {
            return Comment.findOne({ _id: commentId });
        },

        myComments: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('Username or password is incorrect');
        },

        // query for Rover Front Hazard Cam photos 
        getFHAZ: async () => {

            let result = await roverFHAZ()

            result = result.data;


            return { name: result.photos[0].rover.name, status: result.photos[0].rover.status, img_src: result.photos[0].img_src, landing_date: result.photos[0].rover.landing_date, launch_date: result.photos[0].rover.launch_date };
        },
        // query for Rover Rear Hazard Cam photos 
        getRHAZ: async () => {
            let result = await roverRHAZ()
            result = result.data;

            return { name: result.photos[0].rover.name, status: result.photos[0].rover.status, img_src: result.photos[0].img_src, landing_date: result.photos[0].rover.landing_date, launch_date: result.photos[0].rover.launch_date }
        },
        // query for Rover NAVCAM photos query
        getNAVCAM: async () => {
            let result = await roverNAVCAM()
            result = result.data;

            return { name: result.photos[0].rover.name, status: result.photos[0].rover.status, img_src: result.photos[0].img_src, landing_date: result.photos[0].rover.landing_date, launch_date: result.photos[0].rover.launch_date }
        },
        // query for picture of the day photo 
        spacePic: async () => {
            let result = await dailyPic()
            result = result.data;

            return { date: result.date, explanation: result.explanation, url: result.url, title: result.title }
        },
        // query for Twitter posts
        getTwitter: async () => {
            const twitterArray = await search()

            return twitterArray
        },
    },

    Mutation: {

        addUser: async (parent, { username, email, password }) => {
            // create user
            const user = await User.create({ username, email, password });
            //token
            const token = signToken(user);
            return { token, user };
        },

        login: async (parent, { email, password }) => {
            // check email

            const user = await User.findOne({ email });
            console.log(user)
            if (!user) {
                throw new AuthenticationError('Username or password is incorrect');
            }
            // check password
            const correctPass = await user.isCorrectPassword(password);

            if (!correctPass) {
                throw new AuthenticationError('Username or password is incorrect');
            }
            const token = signToken(user);
            return { token, user };
        },

        addComment: async (parent, { commentText }, context) => {
            // the next line is for testing purposes if you are not testing then leave commented out  
            //  context.user = await User.findOne({ email: "admin@ineedspace.com" });
            if (context.user) {
                let user = await User.findOne({ _id: context.user._id });

                const comment = await Comment.create({

                    commentText,
                    commentAuthor: user.username

                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { comments: comment._id } }
                );
                return comment;
            }
            throw new AuthenticationError('Not logged in');
        },

        updateComment: async (parent, { commentId, commentText }, context) => {
            // the next line is for testing purposes if you are not testing then leave commented out  
            // context.user = await User.findOne({ email: "admin@ineedspace.com" });

            if (context.user) {

                let user = await User.findOne({ _id: context.user._id });

                return await Comment.findOneAndUpdate({ _id: commentId, commentAuthor: user.username },
                    { $set: { commentText } });
            }
            throw new AuthenticationError('Not logged in');
        },


        removeComment: async (parent, { commentId }, context) => {
            // the next line is for testing purposes if you are not testing then leave commented out unless 
            // context.user = await User.findOne({ email: "spaceman@gmail.com" })
            if (context.user) {

                let user = await User.findOne({ _id: context.user._id });
                const comment = await Comment.findOneAndDelete({
                    _id: commentId,
                    commentAuthor: user.username,
                });
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { comments: comment._id } }
                );
                return comment;
            }
            throw new AuthenticationError('Not logged in');
        }

    },

}

module.exports = resolvers;