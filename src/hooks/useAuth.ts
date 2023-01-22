import { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthData {
  token: string | null;
  isAuth: boolean;
  login(token: string): void;
  logout(): void;
}

const TOKEN_STORAGE_KEY = "@Auth:token";

export const useAuth = (): AuthData => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    async function loadToken() {
      const storageToken = await AsyncStorage.getItem(TOKEN_STORAGE_KEY);
      if (storageToken) {
        setToken(storageToken);
      }
    }

    loadToken();
  }, []);

  function login(token: string) {
    setToken(token);
    AsyncStorage.setItem(TOKEN_STORAGE_KEY, token);
  }

  function logout() {
    setToken(null);
    AsyncStorage.removeItem(TOKEN_STORAGE_KEY);
  }

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization = token;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  }, [token]);

  const isAuth = !!token;

  return { token, isAuth, login, logout };
};
