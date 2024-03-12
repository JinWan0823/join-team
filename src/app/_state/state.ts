import { useRecoilState } from "recoil";
import {
  DataUpdate,
  accessTokenState,
  refreshTokenState,
  userLoginState,
} from "./recoil";
import { useState } from "react";

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

export const useUpdateData = () => {
  const [updateData, setUpdateData] = useState(DataUpdate);
  return [updateData, setUpdateData];
};
