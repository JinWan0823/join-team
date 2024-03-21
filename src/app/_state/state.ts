import { useRecoilState } from "recoil";
import { DataUpdate, userInfoState, userLoginState } from "./recoil";
import { useState } from "react";

export const useLoginInfo = () => {
  const [loginInfo, setLoginInfo] = useRecoilState(userLoginState);
  return [loginInfo, setLoginInfo];
};

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  return [userInfo, setUserInfo];
};

export const useUpdateData = () => {
  const [updateData, setUpdateData] = useState(DataUpdate);
  return [updateData, setUpdateData];
};
