import axios from "axios";
export const getData = <T>(url: string, token?: string): Promise<T> => {
  let headers;
  if (token) {
    headers = {
      withCredentials: true,
      Authorization: `Bearer ${token}`,
    };
  }
  return axios
    .get<T>(url, { headers })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
