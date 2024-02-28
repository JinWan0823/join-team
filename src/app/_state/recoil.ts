import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const accessTokenState = atom({
  key: "accessTokenState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const refreshTokenState = atom({
  key: "refreshTokenState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const userLoginState = atom({
  key: "userLoginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
