const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        questions: [Question]!
    }

    type Question {
        id: ID!
        title: String
        link: String
        score: Int
    }

`;

module.exports = typeDefs;