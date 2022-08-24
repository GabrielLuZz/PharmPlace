import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await api.get("/users");

    return response.data;
  };

  useEffect(() => {
    getUsers().then((resp) => setUsers(resp));
  }, []);
  return (
    <UsersContext.Provider value={{ users, setUsers, getUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
