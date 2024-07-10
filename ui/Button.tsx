import Image from "next/image";
import React from "react";

interface ButtonProps {
  label: string;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const { label, className, ...restProps } = props;
  return (
    <button
      className={`bg-purple-secondary text-purple-primary flex justify-between items-center gap-2 rounded-[5px] focus:outline-none ${className}  py-4 px-10 `}
      {...restProps}
    >
      {label}
      <Image
        src="/blog/assets/icons/arrow.svg"
        width={12}
        height={12}
        alt="arrow"
      />
    </button>
  );
};
