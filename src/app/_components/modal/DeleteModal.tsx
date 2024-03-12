import { Dispatch, SetStateAction, useEffect } from "react";

interface DeleteModalProps {
  setDeleteModal: Dispatch<SetStateAction<boolean>>;
  handleDeleteData: () => void;
}

export default function DeleteModal({
  setDeleteModal,
  handleDeleteData,
}: DeleteModalProps) {
  useEffect(() => {
    document.querySelectorAll("section")[0].style.overflow = "hidden"; // 모달이 열릴 때 스크롤을 숨김
    return () => {
      document.querySelectorAll("section")[0].style.overflow = "";
    };
  }, []);

  return (
    <div className="modal fixed position-center bg-[#fff] rounded-[10px] shadow-xl">
      <div className="p-[10px] text-center py-[20px]">
        <p className="text-md">게시글을 정말 삭제하시겠어요?</p>
        <span className="text-sm text-[#878787]">
          한번 삭제된 게시물은 복구가 불가능합니다.
        </span>
      </div>
      <button className="w-full text-sm font-bold text-red-400 border-t-[1px] py-[8px]">
        삭제
      </button>
      <button
        className="w-full text-sm border-t-[1px] py-[8px]"
        onClick={() => setDeleteModal(false)}
      >
        취소
      </button>
    </div>
  );
}
