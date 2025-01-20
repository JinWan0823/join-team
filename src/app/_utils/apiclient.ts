import axios from "axios";
import { joinTeamUrl } from "./url";

let setErrorState: (error: { isError: boolean; message: string }) => void;

export const setErrorUpdater = (
  updater: (error: { isError: boolean; message: string }) => void
) => {
  setErrorState = updater;
};

const apiClient = axios.create({
  baseURL: joinTeamUrl,
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof window !== "undefined" && error.response?.status === 401) {
      console.log("로그인 정보 없음");
      if (setErrorState) {
        console.log(setErrorState);
        setErrorState({
          isError: true,
          message: "로그인이 필요합니다.",
        });
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
