import { app } from "@/Firebase/firebase.config";
import { getAuth } from "firebase/auth";
import React, { createContext } from "react";

const auth = getAuth(app);
export const AuthProvider = createContext();

const AuthenticationContext = ({ children }) => {
  const info = {};
  return <AuthProvider.Provider value={info}>{children}</AuthProvider.Provider>;
};

export default AuthenticationContext;
