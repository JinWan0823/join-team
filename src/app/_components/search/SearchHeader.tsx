"use client";
import Link from "next/link";
import React, { SetStateAction, useState, Dispatch } from "react";
import { GoSearch } from "react-icons/go";
import { MdArrowBackIosNew } from "react-icons/md";

interface SearchHeaderProps {
  setSearchList: Dispatch<SetStateAction<string[]>>;
}

export default function SearchHeader({ setSearchList }: SearchHeaderProps) {
  const [searchValue, setSearchValue] = useState("");

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
  };

  return (
    <div className="flex-center p-[10px]">
      <Link href={"/login"}>
        <MdArrowBackIosNew className="text-xl" />
      </Link>
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
              setSearchValue("");
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
