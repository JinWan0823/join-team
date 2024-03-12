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

export const postData = async <T>(
  url: string,
  formData: object
): Promise<T> => {
  try {
    const response = await axios.post<T>(url, formData);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putData = async <T>(url: string, formData: object): Promise<T> => {
  try {
    const response = await axios.put<T>(url, formData);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteData = async <T>(url: string): Promise<T> => {
  try {
    const response = await axios.delete<T>(url);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
