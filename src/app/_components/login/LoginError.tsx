import { useEffect, useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';

export default function LoginError() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`absolute w-[calc(100%-10px)] p-[12px] bg-[#000000a6] top-[0] flex-center text-[#fff] rounded-[20px] text-sm ${
        isVisible ? 'login-error-visible' : 'login-error-hidden'
      }`}
    >
      <MdErrorOutline className="mr-[4px] text-md text-[#ffa26f]" /> 아이디와 비밀번호를 다시 확인해보세요.
    </div>
  );
}
