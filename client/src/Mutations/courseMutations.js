import gql from 'graphql-tag';

export const CREATE_COURSE = gql`
    mutation createCourse($title: String!, $author: String!) {
        createCourse(title: $title, author: $author) {
            id
            title
            author
            }
        }
    `;

export const DELETE_COURSE = gql`
    mutation deleteCourse($id: Int!) {
        deleteCourse(id: $id) {
            id
            }
        }
    `;