import axios from "axios";
import apiClient from "./apiclient";

export const getData = <T>(url: string): Promise<T> => {
  return apiClient
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
    const response = await apiClient.post<T>(url, formData);
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
    const response = await apiClient.post<T>(url, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putData = async <T>(url: string, formData: object): Promise<T> => {
  try {
    const response = await apiClient.put<T>(url, formData, {
      withCredentials: true,
    });
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
    const response = await apiClient.put<T>(url, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteData = async <T>(url: string): Promise<T> => {
  try {
    const response = await apiClient.delete<T>(url, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
