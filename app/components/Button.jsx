"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const Button = ({ content, bg, loadingBg, loadingText }) => {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        disabled={pending}
        className={`w-full my-3 text-white font-bold rounded-md p-3 ${pending ? loadingBg : bg}`}
      >
        {pending ? loadingText : content}
      </button>
    </>
  );
};

export default Button;
