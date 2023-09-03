import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { createPetModel } from "./pet.js";
import { createUserModel } from "./user.js";
import lodash from 'lodash'

// Extend Low class with a new `chain` field
class LowWithLodash extends Low {
  chain = lodash.chain(this).get('data')
}

const _dirName = dirname(fileURLToPath(import.meta.url));
const file = join(_dirName, "db.json");

const adapter = new JSONFile(file);
const defaultData = { user: {}, pet: [] };
const db = new LowWithLodash(adapter, defaultData);

const newModel = {
  models: {
    pet: createPetModel(db),
    user: createUserModel(db),
  },
  db,
};

export default newModel;
