import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const loginAuth = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };
  const logoutAuth = () => {
    if (localStorage.getItem("accessToken")) {
      localStorage.removeItem("accessToken");
    }
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ user, loginAuth, logoutAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
