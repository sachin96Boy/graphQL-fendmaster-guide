import { gql } from "graphql-tag";

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: Id!
    userName: String!
  }
  type Pet {
    id: Id!
    createdAt: String!
    name: String
    type: String
  }
  type Id{
    id: String
  }

  type Query {
    pets: [Pet]!
  }
`;

export default typeDefs;
