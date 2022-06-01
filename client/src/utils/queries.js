import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user($username: String!) {
    user(username: $username) {
        _id
        username
        email 
        comments{
            _id
            commentText
            commentAuthor
            createdAt

        }
    }
}
`;

export const QUERY_COMMENTS = gql`
query getComments {
    comments{
        _id
        commentText
        commentAuthor
        createdAt
    }
}
`;

export const QUERY_SINGLE_COMMENT = gql`
query getSingleComment($commentId: ID!) {
    comments(commentId: $commentId) {
        _id 
        commentText
        commentAuthor
        createdAt
    }
}
`;

export const QUERY_MYCOMMENTS = gql`
query myComments {
    myComments{
        _id
        username
        email
        comments {
            _id
            commmentText
            commentAuthor
            createdAt
    
        }
    }
}
`;