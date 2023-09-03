# Argument and Types

## Arguments

1. Allows clients to pass variables along with Quries that can be used in your Resolvers to get data.
2. Must be defined in your schema
3. can be added to any field
4. Either have to be Sclaer types or input types

## Input types

1. just like types, but used for arguments
2. All field value types must be other input types or Scalars


## Arguments in Resolvers

1. Argument will be passed to field Resolvers as the second argument
2. The argument object will strictly follow the argument names and field types
