"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const Button = ({ content, bg, loadingBg, loadingText }) => {
  const { pending } = useFormStatus();
  return (
    <>
      <button disabled={pending} className={``}></button>
    </>
  );
};

export default Button;
