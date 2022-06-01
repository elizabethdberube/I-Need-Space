const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {

    _id: ID
    username: String
    email: String!
    password: String!
    commentSchema: [Comment]!
  }

type Comment {
    _id: ID
    commentAuthor: String!
    commentText: String!
    createdAt: String
   
}

type Auth {

    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    comments(username: String): [Comment]
    comment(commentId: ID!): Comment
    FHAZ(name: String, status: String, img_src: String, landing_date: String, launch_date: String): String
    RHAZ(name: String, status: String, img_src: String, landing_date: String, launch_date: String): String
    NAVCAM(name: String, status: String, img_src: String, landing_date: String, launch_date: String):  String
    spacePic(date: String, explanation: String, url: String, title: String): String
  }

  type Mutation {
    addUser( username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(commentText: String!, commentAuthor: String!): Comment
    removeComment( commentId: ID!): Comment
  }
`;

module.exports = typeDefs;