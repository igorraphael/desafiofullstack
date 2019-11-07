const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        questions: [Question]!
    }

    type Question {
        id: ID!
        title: String
        tags: [String]
        link: String
        score: Int
        view_count: Int
        owner: User
    }

    type User {
        user_id: ID!
        profile_image: String
        display_name: String
    }
`;

module.exports = typeDefs;