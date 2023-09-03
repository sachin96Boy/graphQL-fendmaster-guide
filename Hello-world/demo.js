import gql from "graphql-tag";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = gql`
  type User {
    email: String!
    avatar: String
    friends: [User!]!
  }

  type shoe {
    brand: String!,
    size: Int!
  }

  input shoesInput {
    brand: String
    size: Int
  }

  type Query {
    me: User!
    shoes(input: shoesInput): [shoe]

  }
`;
const resolver = {
  Query: {
    shoes: (_, {input})=>{
      return [
        {brand: "nike", size: 12},
        {brand: "volo", size: 19},
      ].filter(shoe=> shoe.brand === input.brand)
    },
    me: () => {
      return {
        email: "sachinsupunthaka@gmail.com",
        avatar: "http://voda.png",
        friends: [],
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolver,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
