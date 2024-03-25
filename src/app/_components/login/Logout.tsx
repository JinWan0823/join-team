import { getData } from "@/app/_utils/axios";
import { useRouter } from "next/navigation";
import { IoIosLogOut } from "react-icons/io";
export default function Logout() {
  const router = useRouter();

  const url = "http://localhost:8080/logout";
  const handleLogout = async () => {
    try {
      const result = await getData(url);
      router.push("/");
    } catch (error) {
      throw error;
    }
  };
  return <button onClick={() => handleLogout()}>로그아웃</button>;
}
