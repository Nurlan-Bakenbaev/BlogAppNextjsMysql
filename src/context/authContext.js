"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const login = async (loginData) => {
    const res = await axios.post("http://localhost:8000/api/login", loginData, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    setCurrentUser(res.data);
  };
  const logout = async () => {
    await axios.post("http://localhost:8000/api/logout", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    setCurrentUser(null);
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
