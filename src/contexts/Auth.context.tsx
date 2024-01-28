// AuthContext.js
import { getLocalStorageKey } from "#utils/localStorage";
import { createContext, useEffect, useState } from "react";

const initialValues = {
  user: {},
  setUser: () => {}, // Provide a function for setUser
};

export const AuthContext = createContext(initialValues);

// Create a provider component
export const AuthProvider = ({ children }) => {
  const id = getLocalStorageKey("userId");
  const profile_pic = getLocalStorageKey("profile");

  const [user, setUser] = useState({ userId: null, profile_pic: null });

  useEffect(() => {
    setUser({ ...user, userId: id, profile_pic: profile_pic });
  }, [id, profile_pic]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
