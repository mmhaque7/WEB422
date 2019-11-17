// If running off a local, assume the backend is also supposed to be local
const isLocal = false;
export const baseUrl = isLocal
  ? "http://localhost:4000/"
  : "https://stormy-cliffs-97970.herokuapp.com/";
