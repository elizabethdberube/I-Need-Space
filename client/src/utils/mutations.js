import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!){
 login(email: $email, password: $password ) {
     token 
     user{
         _id
         username
     }
   }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password){
        token 
        user{
          _id
          username 
        }
      
       
    }
  }
`;

export const ADD_COMMENT = gql`
mutation addComment( $commentText: String!){
    addComment(commentText: $commentText){
        _id
        commentText
        commentAuthor
      
    }
  }
`;

export const UPDATE_COMMENT = gql`
mutation updateComment($commentId: ID!, $commentText: String!){
updateComment(commentId: $commentId, commentText: $commentText){ 
    _id
    commentText
    

   }
  }   
`;


export const REMOVE_COMMENT = gql`
mutation removeComment($commentId: ID!){
  removeComment(commentId: $commentId){ 
    _id
    commentAuthor
    commentText

   }
  }   
`;