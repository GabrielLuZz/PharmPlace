import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();

  useEffect(() => {
   const logged = JSON.parse(localStorage.getItem("@userData"));

    if (logged) {
      setAuth(true)
    }
  }, [auth]); 

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
