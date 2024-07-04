import React from "react";

interface PaginationProps {
  paginations: any[];
  onClickItem: (label: string) => void;
}

export function Pagination({ paginations, onClickItem }: PaginationProps) {
  return (
    <div className="flex items-center gap-3 w-full justify-center mx-auto py-24">
      {paginations?.map((page) => {
        const isPrev = page?.label?.includes("&laquo; Previous");
        const isNext = page?.label?.includes("Next &raquo;");
        return (
          <div
            className={`cursor-pointer w-[40px] h-[40px] flex justify-center items-center text-center border border-purple-primary ${
              page?.active === true
                ? "bg-purple-primary text-white"
                : "text-black"
            }`}
            onClick={() => onClickItem(page?.label)}
          >
            {isPrev ? "<" : isNext ? ">" : page?.label}
          </div>
        );
      })}
    </div>
  );
}
