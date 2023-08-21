# definition

A Type schema that defines operations clients can perform to access data that resembles the shape of the orther types in the schema.

## creating Quries

1. Create Query types in the schema using  SDL
2. Add fields to the Query Type
3. Create Resolvers that for the fields

## What are Resolvers

Functions that are responsible for returning values for fields that exist on Types in a Schema. Resolvers execution is dependent on the incoming client Query

## creatig Resolvers

1. Resolver name must match exact field name on your Schema's Type.
2. Resolvers must Return the value type declared for the matching field.
3. Resolvers can be Async
4. can retrive data from any source.

## Schema + Resolver = Server

To create a Server, at miimum we need a Query type with a field, and a Resolver for that field.
