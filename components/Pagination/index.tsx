import React, { Dispatch, SetStateAction } from "react";

interface PaginationProps {
  meta: any;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export function Pagination({ meta, page, setPage }: PaginationProps) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const onClickItem = (label: string) => {
    const isPrev = label?.includes("&laquo; Previous");
    const isNext = label?.includes("Next &raquo;");
    if (isNext && meta?.current_page !== meta?.last_page) {
      setPage((prev) => prev + 1);
    }
    if (isPrev && meta?.current_page !== meta?.from) {
      setPage((prev) => prev - 1);
    }
    if (!isPrev && !isNext) {
      setPage(parseInt(label));
    }
  };
  return (
    <div className="flex items-center gap-3 w-full justify-center mx-auto py-24">
      {meta?.links?.map((page: any) => {
        const isPrev = page?.label?.includes("&laquo; Previous");
        const isNext = page?.label?.includes("Next &raquo;");
        return (
          <div
            className={`cursor-pointer w-[40px] h-[40px] flex justify-center items-center text-center border border-purple-primary ${
              page?.active === true
                ? "bg-purple-primary text-white"
                : "text-black"
            }
            ${
              isPrev && meta?.current_page === meta?.from
                ? "cursor-not-allowed"
                : "cursor-pointer "
            }
            ${
              isNext && meta?.current_page === meta?.last_page
                ? "cursor-not-allowed"
                : "cursor-pointer "
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
