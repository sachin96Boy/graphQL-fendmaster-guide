/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

const query = {
  pets(_, __, newModel) {
    newModel.models.pet.findMany({});
  },
};
// export const Mutation = {};
// export const Pet = {
//   img(pet) {
//     return pet.type === "DOG"
//       ? "https://placedog.net/300/300"
//       : "http://placekitten.com/300/300";
//   },
// };
// export const User = {};
// /**
//  * Here are your Resolvers for your Schema. They must match
//  * the type definitions in your scheama
//  */

// export const Query = {};
// export const Mutation = {};
// export const Pet = {
//   img(pet) {
//     return pet.type === "DOG"
//       ? "https://placedog.net/300/300"
//       : "http://placekitten.com/300/300";
//   },
// };
// export const User = {};
const resolver = {
  Query: {
    pets: query,
  },
};
export default resolver;
