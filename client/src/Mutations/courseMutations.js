import gql from 'graphql-tag';

export const CREATE_COURSE = gql`
    mutation createCourse($title: String!, $author: String!) {
        createCourse(title: $title, author: $author) {
            title
            author
            }
        }
    `;