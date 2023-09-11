import axios, { AxiosInstance } from "axios";

export function useApi() {
  const headers = {
    "Content-Type": "application/json",
    "Access-control-Allow-Origin": "*",
  };

  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers,
  });

  // api.interceptors.request.use((config) => {
  //   // Aller dans le local storage recuperer le token et l'injecter dans la requete
  //   config.headers["Authorization"] = "Bearer 4654654654654646546sdfs5";
  //   return config;
  // });

  // api.interceptors.response.use(
  //   // sert generalement a centraliser et gerer les erreurs
  //   // exemple parametrage de l'erreur 500 (serveur)

  //   // refresh token est gere ici !!!!!
  // );

  return api;
}
