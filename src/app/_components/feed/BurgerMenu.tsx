"use client";
import Link from "next/link";
import { useState } from "react";
import { TbMenuDeep, TbPencil, TbTrash } from "react-icons/tb";
import DeleteModal from "../modal/DeleteModal";
import { FeedHeaderProps } from "./FeedHeader";
import { deleteData } from "@/app/_utils/axios";
import { useSetRecoilState } from "recoil";
import { useUpdateData } from "@/app/_state/state";
import { DataUpdate } from "@/app/_state/recoil";

export default function BurgerMenu({ dataId }: FeedHeaderProps) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const setUpdateStatus = useSetRecoilState(DataUpdate);

  const url = `http://localhost:8080/feed/${dataId}`;

  const handleDeleteData = async () => {
    setDeleteModal(false);
    try {
      const result = await deleteData(url);
      setUpdateStatus((prev) => !prev);
    } catch (error) {
      console.error("Data Fetching Error : ", error);
    }
  };

  return (
    <div className="text-lg cursor-pointer relative">
      <TbMenuDeep onClick={() => setToggleMenu((prev) => !prev)} />
      {toggleMenu && (
        <div className="absolute bottom-[-4px] right-[0] text-sm translate-y-[100%] whitespace-nowrap shadow-xl tab-menu z-50">
          <ul className="bg-[#ebebeb] rounded-[4px]">
            <li className="py-[4px] px-[10px]">
              <Link href={`/feed/update/${dataId}`} className="flex-center">
                수정 <TbPencil className="ml-[4px] text-md" />
              </Link>
            </li>
            <li className="border-t-[1px] border-[#] py-[4px] px-[10px]">
              <div
                className="flex-center"
                onClick={() => {
                  setDeleteModal(true);
                  setToggleMenu(false);
                }}
              >
                삭제 <TbTrash className="ml-[4px] text-md" />
              </div>
            </li>
          </ul>
        </div>
      )}
      {deleteModal && (
        <DeleteModal
          setDeleteModal={setDeleteModal}
          handleDeleteData={handleDeleteData}
        />
      )}
    </div>
  );
}
