const { AuthenticationError } = require('apollo-server-express');
const { Comment, User } = require('../models');
const { signToken } = require('../../server/utils/auth');
const { roverFHAZ, roverNAVCAM, roverRHAZ } = require('../helperAPI/getRover');
const { dailyPic } = require('../helperAPI/getPic')

const resolvers = {

    Query: {
        users: async () => {
            return User.find({}).populate('comments');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('comments');
        },
        comments: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Comment.find(params).sort({ createdAt: -1 });
        },
        comment: async (parent, { commentId }) => {
            return Comment.findOne({ _id: commentId });
        },
        FHAZ: async () => {
            const result = roverFHAZ()
            console.log(result)
            return { name: result.photos[0].rover.name, status: result.photos[0].rover.status, img_src: result.photos[0].img_src, landing_date: result.photos[0].rover.landing_date, launch_date: result.photos[0].rover.launch_date }
        },
        RHAZ: async () => {
            const result = roverRHAZ()
            console.log(result)
            return { name: result.photos[0].rover.name, status: result.photos[0].rover.status, img_src: result.photos[0].img_src, landing_date: result.photos[0].rover.landing_date, launch_date: result.photos[0].rover.launch_date }
        },
        NAVCAM: async () => {
            const result = roverNAVCAM()
            console.log(result)
            return { name: result.photos[0].rover.name, status: result.photos[0].rover.status, img_src: result.photos[0].img_src, landing_date: result.photos[0].rover.landing_date, launch_date: result.photos[0].rover.launch_date }
        },
        spacePic: async () => {
            const result = dailyPic()
            console.log(result)
            return { date: result.date, explanation: result.explanation, url: result.url, title: result.title }
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

        addComment: async (parent, { commentAuthor, commentText }) => {
            const comment = await Comment.create({ commentAuthor, commentText });

            await User.findOneAndUpdate(
                { username: commentAuthor },
                { $addToSet: { comments: comment._id } }
            );
            return comment;
        },

        removeComment: async (parent, { commentId }) => {
            return Comment.findOneAndDelete({ _id: commentId });
        },
    },




}

module.exports = resolvers;