import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { createPetModel } from "./pet";
import { createUserModel } from "./user";

const _dirName = dirname(fileURLToPath(import.meta.url));
console.log(_dirName)
const file = join(_dirName, "db.json");

const adapter = new JSONFile(file);
const db = new Low(adapter);

const newModel = {
  models: {
    pet: createPetModel(db),
    user: createUserModel(db),
  },
  db,
};

export default newModel;
