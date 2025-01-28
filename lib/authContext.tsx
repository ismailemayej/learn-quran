"use client";
import { userInformation } from "@/components/DataAction/DataHandle";
import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext<any>({
  user: null,
  setUser: () => {},
});
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const fetchUserInformation = async () => {
      const userData = await userInformation();
      setUser(userData);
    };
    fetchUserInformation();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
