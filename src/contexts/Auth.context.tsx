import { getLocalStorageKey } from "#utils/localStorage";
import { createContext, useEffect, useState } from "react";

const initialValues = {
  user: {
    userId: null,
    profile_pic: null,
  },
  setUser: () => {},
};

export const AuthContext = createContext(initialValues);

// Create a provider component
export const AuthProvider = ({ children }: { children: any }) => {
  const userId = getLocalStorageKey("userId");
  const profile_pic = getLocalStorageKey("profile");

  const [user, setUser] = useState({
    userId: userId,
    profile_pic: profile_pic,
  });

  useEffect(() => {
    setUser((prevUser) => ({
      ...prevUser,
      userId: userId,
      profile_pic: profile_pic,
    }));
  }, [userId, profile_pic]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
