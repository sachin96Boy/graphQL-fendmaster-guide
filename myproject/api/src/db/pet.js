import { nanoid } from "nanoid";

export const createPetModel = (db) => {
  return {
    async findMany(filter) {
      await db.read()
      return db.chain.get("pet").filter(filter).value();
    },
    async findOne(filter) {
      await db.read();
      return db.chain.get("pet").find(filter).value();
    },
    async create(pet) {
      const newPet = {
        id: nanoid(),
        createdAt: Date.now(),
        ...pet,
      };
      await db.read();
      db.chain.get("pet").push(newPet).write();
      return newPet;
    },
  };
};


