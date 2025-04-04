import db from "./firebase";
import { ref, get, remove, push, update } from "firebase/database";

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

const getSuggestions = async (type) => {
  const dbRef = ref(db, `/${type}`);
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    return Object.entries(snapshot.val()).map(([id, value]) => ({ id, ...value }));
  }
  return [];
};

const addSuggestion = async (type, suggestionData) => {
  const dbRef = ref(db, `/${type}`);
  const newRef = push(dbRef, suggestionData);
  return newRef.key;
};

const removeSuggestion = (type, id) => {
  const dbRef = ref(db, `/${type}/${id}`);
  return remove(dbRef);
};

const updateSuggestion = (type, id, newData) => {
  const dbRef = ref(db, `/${type}/${id}`);
  return update(dbRef, newData);
};

export default {
  getSpeciesByType,
  addSpecies,
  removeSpecies,
  addSuggestion,
  getSuggestions,
  removeSuggestion,
  updateSuggestion,
};
