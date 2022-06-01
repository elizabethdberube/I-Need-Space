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

export const FHAZ_Data = gql`
query FHAZ {
    FHAZ{
        name
        status
        img_src
        landing_date
        landing_date
       
    }
}
`;

export const RHAZ_Data = gql`
query RHAZ {
    RHAZ{
        name
        status
        img_src
        landing_date
        landing_date
       
    }
}
`;

export const NAVCAM_Data = gql`
query NAVCAM {
    NAVCAM{
        name
        status
        img_src
        landing_date
        landing_date
       
    }
}
`;

export const spacePic_Data = gql`
query spacePic {
    spacePic{
        explanation
        date
        url
        title
    }
}
`;

export const twitter_Data = gql`
query twitterResult {
    twitterResult{
        name
        date
        url
        source
        screen_name
        description
        location
    }
}
`;