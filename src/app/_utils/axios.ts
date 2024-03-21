import axios from "axios";
export const getData = <T>(url: string): Promise<T> => {
  return axios
    .get<T>(url, {
      withCredentials: true,
    })
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
    const response = await axios.post<T>(url, formData, {
      withCredentials: true,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postImgData = async <T>(
  url: string,
  formData: object
): Promise<T> => {
  try {
    const response = await axios.post<T>(url, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putData = async <T>(url: string, formData: object): Promise<T> => {
  try {
    const response = await axios.put<T>(url, formData, {
      withCredentials: true,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putImgData = async <T>(
  url: string,
  formData: object
): Promise<T> => {
  try {
    const response = await axios.put<T>(url, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteData = async <T>(url: string): Promise<T> => {
  try {
    const response = await axios.delete<T>(url, {
      withCredentials: true,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
