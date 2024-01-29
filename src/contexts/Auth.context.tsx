import { createContext, useEffect, useState } from "react";
import { getLocalStorageKey } from "#utils/localStorage";
interface User {
  userId: string | null;
  profile_pic: string | null;
}

interface AuthContextProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>> | any;
}

const initialValues: AuthContextProps = {
  user: {
    userId: null,
    profile_pic: null,
  },
  setUser: () => {},
};

export const AuthContext = createContext(initialValues);

// Create a provider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const userId = getLocalStorageKey("userId");
  const profile_pic = getLocalStorageKey("profile");

  const [user, setUser] = useState<User>({
    userId: userId !== undefined ? userId : null,
    profile_pic: profile_pic !== undefined ? profile_pic : null,
  });

  useEffect(() => {
    setUser((prevUser) => ({
      ...prevUser,
      userId: userId !== undefined ? userId : null,
      profile_pic: profile_pic !== undefined ? profile_pic : null,
    }));
  }, [userId, profile_pic]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
