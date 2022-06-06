const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {

    _id: ID
    username: String
    email: String!
    password: String!
    commentSchema: [Comment]
  }

type Comment {
    _id: ID!
    commentAuthor: String
    commentText: String!
   
}

type FHAZ {
  name: String
  status: String
  img_src: String 
  landing_date: String
  launch_date: String

}
type RHAZ {
  name: String
  status: String
  img_src: String 
  landing_date: String
  launch_date: String

}
type NAVCAM {
  name: String
  status: String
  img_src: String 
  landing_date: String
  launch_date: String

}

type spacePic {
  explanation: String
  date: String 
  url: String 
  title: String

}

type twitterResult {
  name: String
  created_at: String
  text: String
  url: String
  source: String
  screen_name: String
  description: String
  location: String

}


type Auth {

    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    getComments: [Comment]
    comment(commentId: ID!): Comment
    getFHAZ: FHAZ
    getRHAZ: RHAZ
    getNAVCAM:  NAVCAM
    spacePic: spacePic
    getTwitter: [twitterResult]
    myComments: User
  }

  type Mutation {
    addUser( username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment( commentText: String!): Comment
    updateComment(commentId: ID, commentText: String!): Comment
    removeComment( commentId: ID!): Comment
   
  }
`;

module.exports = typeDefs;