import gql from 'graphql-tag';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = gql`
    type User{
        email: String!
        avatar: String
        friends: [User!]!
    }
    
    type Query{
        me: User!
    }
`;
const resolver = {
    Query: {
        me(){
            return {
                email: 'sachinsupunthaka@gmail,com',
                avatar: 'http://voda.png',
                friends:[

                ]
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolver
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);

