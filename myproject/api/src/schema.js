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

  input NewPetInput {
    name: String
    type: String
  }

  type Query {
    pets(input: PetInput): [Pet]!
    pet(input: PetInput): Pet
  }

  # create a mutation
  type Mutation {
    newPet(input: NewPetInput): Pet!
  }
`;

export default typeDefs;
