# Mutation type

## what are mutations?

A type on a Schema that defines operations clients can perform to mutate data (create, update, delete)

## creating Mutations

1. Define Mutation type on Schema using SDL
2. Add fields to the Mutation type
3. Add arguments to mutation fields
4. Create Resolvers for Mutation Fields

## Return values for mutation fields

1. Depends on clients and use cases
2. If using a client side GraphQL cache, you should return the exact values Queries return
   
