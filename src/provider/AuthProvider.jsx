import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const user = { displayName: "Rafee" };
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
