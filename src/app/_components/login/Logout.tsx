import { userInfoState, userLoginState } from "@/app/_state/recoil";
import { getData } from "@/app/_utils/axios";
import { joinTeamUrl } from "@/app/_utils/url";
import { useRouter } from "next/navigation";
import { useResetRecoilState } from "recoil";

export default function Logout() {
  const router = useRouter();
  const resetLoginInfo = useResetRecoilState(userLoginState);
  const resetUserInfo = useResetRecoilState(userInfoState);

  const handleLogout = async () => {
    try {
      const result = await getData(`${joinTeamUrl}/logout`);

      resetLoginInfo();
      resetUserInfo();

      localStorage.removeItem("recoil-persist");

      router.push("/");
    } catch (error) {
      throw error;
    }
  };
  return <button onClick={() => handleLogout()}>로그아웃</button>;
}
