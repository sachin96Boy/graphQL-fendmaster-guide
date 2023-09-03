import gql from "graphql-tag";

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: String!
    userName: String!
  }
  type Pet {
    id: String!
    createdAt: String!
    name: String
    type: String
  }

  input PetInput {
    name: String
    type: String
  }
  #   type Id {
  #     id: String
  #   }

  type Query { 
    pets(input: PetInput): [Pet]!
    pet(input: PetInput): Pet
  }
`;

export default typeDefs;
