import { gql } from 'apollo-server';

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  
  type User{
    id: Id!,
    userName: String!
  }
  type pet{
    id: Id!
    createdAt: String!
    name: String
    type: String
  }

  type Query{
    pets: [Pet]!
    
  }

`;

export default typeDefs