import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { createPetModel } from "./pet.js";
import { createUserModel } from "./user.js";

const _dirName = dirname(fileURLToPath(import.meta.url));
const file = join(_dirName, "db.json");
// console.log(file);

const adapter = new JSONFile(file);
const defaultData = { user: {}, pet: [] };
const db = new Low(adapter, defaultData);

const newModel = {
  models: {
    pet: createPetModel(db),
    user: createUserModel(db),
  },
  db,
};

export default newModel;
