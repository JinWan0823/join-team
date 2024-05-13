"use client";

import { putData } from "@/app/_utils/axios";
import { useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";

interface CommentProps {
  comment: string;
}

export default function InfoComment({ comment }: CommentProps) {
  return (
    <div className="flex items-start mt-[10px]">
      <p className="pl-[6px]">{comment}</p>
    </div>
  );
}
