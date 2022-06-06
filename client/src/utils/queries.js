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

        }
    }
}
`;

export const QUERY_COMMENTS = gql`
query getComments {
    getComments {
        _id
        commentText
        commentAuthor
    }
}
`;

export const QUERY_SINGLE_COMMENT = gql`
query getSingleComment($commentId: ID!) {
    getSingleComment(commentId: $commentId) {
        _id 
        commentText
        commentAuthor
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
    
        }
    }
}
`;

export const FHAZ_Data = gql`
query getFHAZ {
    getFHAZ{
        name
        status
        img_src
        landing_date
        launch_date
       
    }
}
`;

export const RHAZ_Data = gql`
query getRHAZ {
    getRHAZ{
        name
        status
        img_src
        landing_date
        launch_date
       
    }
}
`;

export const NAVCAM_Data = gql`
query getNAVCAM {
    getNAVCAM{
        name
        status
        img_src
        landing_date
        launch_date
       
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
query getTwitter {
    getTwitter{
    name
    created_at
    text
    url
    source
    description
    screen_name
    location
    }
}
`;