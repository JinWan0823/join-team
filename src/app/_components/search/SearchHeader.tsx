"use client";

import React, { SetStateAction, useState, Dispatch } from "react";
import { GoSearch } from "react-icons/go";
import { MdArrowBackIosNew } from "react-icons/md";
import BackBtn from "../common/BackBtn";
import { useRouter } from "next/navigation";

interface SearchHeaderProps {
  setSearchList: Dispatch<SetStateAction<string[]>>;
}

export default function SearchHeader({ setSearchList }: SearchHeaderProps) {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearch = (searchItem: string) => {
    let searchList = localStorage.getItem("latestSearch");
    if (!searchList) {
      searchList = JSON.stringify([searchItem]);
    } else {
      const searchArray = JSON.parse(searchList);
      const filteredArray = searchArray.filter(
        (item: string) => item !== searchItem
      );
      filteredArray.unshift(searchItem);

      const trimmedArray = filteredArray.slice(0, 10);

      searchList = JSON.stringify(trimmedArray);
    }
    localStorage.setItem("latestSearch", searchList);
    setSearchList(JSON.parse(searchList));
    setSearchValue("");
    router.push(`/club?val=${searchValue}`);
  };

  return (
    <div className="flex-center p-[10px]">
      <BackBtn />
      <div className="input w-full mx-[12px] relative p-[10px] px-[14px] bg-[#f1f1f1] rounded-[20px] flex-center">
        <GoSearch className="text-[#a1a8b3]" />
        <form
          className="w-full"
          onSubmit={(e) => {
            e.preventDefault();
            if (searchValue.length < 2) {
              console.log("에러");
            } else {
              handleSearch(searchValue);
            }
          }}
        >
          <input
            type="text"
            placeholder="관심사를 검색해보세요."
            value={searchValue}
            className="w-full outline-0 bg-transparent px-[8px]"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
