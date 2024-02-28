import { useRecoilState } from "recoil";
import { accessTokenState, refreshTokenState, userLoginState } from "./recoil";

export const useAccessToken = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  return [accessToken, setAccessToken];
};

export const useRefreshToken = () => {
  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenState);
  return [refreshToken, setRefreshToken];
};

export const useLoginInfo = () => {
  const [loginInfo, setLoginInfo] = useRecoilState(userLoginState);
  return [loginInfo, setLoginInfo];
};
