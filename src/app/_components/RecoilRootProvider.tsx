"use client";
import { RecoilRoot, useSetRecoilState } from "recoil";
import { errorState } from "../_state/recoil";
import { setErrorUpdater } from "../_utils/apiclient";

export default function RecoilRootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <Initializer>{children}</Initializer>
    </RecoilRoot>
  );
}

function Initializer({ children }: { children: React.ReactNode }) {
  const setError = useSetRecoilState(errorState);

  // setErrorUpdater를 Recoil 상태를 초기화한 후에 실행
  setErrorUpdater(setError);

  return <>{children}</>;
}
