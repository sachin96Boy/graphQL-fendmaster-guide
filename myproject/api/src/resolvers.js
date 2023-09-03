/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

const query = {
  pets(_, {input}, newModel) {
    // console.log(newModel.newModel.models.pet)
    return newModel.newModel.models.pet.findMany(input);
  },
  pet(_, {input}, newModel){
    return newModel.newModel.models.pet.findOne(input);
  }
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
    pets: query.pets,
    pet: query.pet
  },
};
export default resolver;
