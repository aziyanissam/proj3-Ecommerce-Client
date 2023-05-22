import { createContext, useState, useEffect } from "react";
const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const verifyToken = async (currentToken) => {
    const response = await fetch("http://localhost:5005/auth/verify", {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    });
    if (response.status === 200) {
      const parsed = await response.json();
      console.log(parsed)
      setToken(currentToken);
      setIsLoggedIn(true);
      console.log(parsed);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const localToken = localStorage.getItem("authToken");
    if (localToken) {
      verifyToken(localToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("authToken", token);
      setIsLoading(false);
    } else {
      localStorage.removeItem("authToken");
    }
  }, [token]);

  const logout = () => {
    setToken();
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };
  return (
    <SessionContext.Provider value={{ token, setToken, isLoggedIn, isLoading, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContextProvider, SessionContext };
