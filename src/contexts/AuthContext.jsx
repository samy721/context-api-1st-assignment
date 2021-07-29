import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const toggleAuth = () => (isAuth ? setIsAuth(false) : setIsAuth(true));
  const [userData, setUserData] = useState({});
  const updateLogin = (data) => setUserData(data);
  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth, updateLogin, userData }}>
      {children}
    </AuthContext.Provider>
  );
};
