import { useRecoilState } from "recoil";
import { accessTokenState, refreshTokenState } from "./recoil";

export const useAccessToken = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  return [accessToken, setAccessToken];
};

export const useRefreshToken = () => {
  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenState);
  return [refreshToken, setRefreshToken];
};
