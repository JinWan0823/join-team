import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const userLoginState = atom({
  key: "userLoginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const userInfoState = atom({
  key: "userInfo",
  default: {
    username: "",
    name: "",
    interestList: "",
    thumbnail: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const DataUpdate = atom({
  key: "updateData",
  default: true,
});

export const LatestSearchState = atom({
  key: "latestSearch",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
