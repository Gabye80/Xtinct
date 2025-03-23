import db from "./firebase";
import { ref, get, remove, push } from "firebase/database";

const getSpeciesByType = (type) => {
  const dbRef = ref(db, `/${type}`); 
  return get(dbRef);
};

const addSpecies = (type, speciesData) => {
  const dbRef = ref(db, `/${type}`);
  return push(dbRef, speciesData);
};

const removeSpecies = (type, key) => {
  const dbRefSpecies = ref(db, `/${type}/${key}`);
  return remove(dbRefSpecies);
};

export default {
  getSpeciesByType,
  addSpecies,
  removeSpecies,
};
