import { useContext, useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

const fetchToken = ({ setToken, authParametres }) => {
  return fetch("https://accounts.spotify.com/api/token", authParametres)
    .then((result) => result.json())
    .then((data) => setToken(data.access_token));
};

const refreshToken = ({ setToken, authParametres }) => {
  return setInterval(() => {
    fetchToken({ setToken, authParametres });
  }, 2700000);
};

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const authParametres = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${
        import.meta.env.VITE_CLIENT_ID
      }&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`,
    };
    fetchToken({ setToken, authParametres });
    refreshToken({ setToken, authParametres });
  }, []);

  return <AuthContext.Provider value={token}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
