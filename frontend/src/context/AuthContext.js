import { useState, useEffect, createContext, useContext } from 'react';
import api from '../services/api';
import { handleAxiosError } from '../services/error';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [signedIn, setSignedIn] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const Login = ({ email, password }) => {
    setLoading(true);
    api
      .post('/login', {
        email,
        password,
      })
      .then(() => {
        setSignedIn(true);
        localStorage.setItem('@App:user', 'true');
      })
      .catch(error => {
        setError(handleAxiosError(error));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  function Logout() {
    setSignedIn(false);
    localStorage.removeItem('@App:user');
  }

  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    if (storagedUser) {
      setSignedIn(storagedUser === 'true');
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signedIn, error, loading, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
