import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {},
});

export const signIn = (token: string | null) => {
  return api.post(
    "/auth",
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
};
