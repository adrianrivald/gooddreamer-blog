import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";

interface PaginationProps {
  meta: any;
  page: number;
  pageName: "article" | "activity" | "announcement" | "promo" | "search";
}

export function Pagination({ meta, page, pageName }: PaginationProps) {
  const router = useRouter();
  const { query } = router;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const onClickItem = (label: string) => {
    const isPrev = label?.includes("&laquo; Previous");
    const isNext = label?.includes("Next &raquo;");
    const isDot = label === "...";
    if (!isDot) {
      if (isNext && meta?.current_page !== meta?.last_page) {
        if (query?.pageIndex) {
          router.push({
            pathname: `/${pageName}/page/${
              parseInt(query?.pageIndex as string) + 1
            }`,
            query: query?.q && {
              q: query?.q,
            },
          });
        } else {
          router.push({
            pathname: `/${pageName}/page/2`,
            query: query?.q && {
              q: query?.q,
            },
          });
        }
      }
      if (isPrev && meta?.current_page !== meta?.from) {
        router.push({
          pathname: `/${pageName}/page/${
            parseInt(query?.pageIndex as string) - 1
          }`,
          query: query?.q && {
            q: query?.q,
          },
        });
      }
      if (!isPrev && !isNext) {
        router.push({
          pathname: `/${pageName}/page/${parseInt(label).toString()}`,
          query: query?.q && {
            q: query?.q,
          },
        });
      }
    }
  };
  return (
    <div className="flex items-center overflow-x-auto gap-3 w-full justify-start lg:justify-center mx-auto py-24">
      <div
        onClick={() => onClickItem("&laquo; Previous")}
        className={`flex-none w-[40px] h-[40px] flex justify-center items-center text-center border border-purple-primary
            ${
              meta?.current_page === meta?.from
                ? "cursor-not-allowed"
                : "cursor-pointer "
            }`}
      >
        {"<"}
      </div>
      <div className="flex items-center overflow-auto gap-3">
        {meta?.links
          ?.filter(
            (value: any) =>
              !value?.label?.includes("&laquo; Previous") &&
              !value?.label?.includes("Next &raquo;")
          )
          .map((page: any, index: number) => {
            const isDot = page?.label === "...";
            return (
              <div
                key={index}
                className={`cursor-pointer flex-none w-[40px] h-[40px] flex justify-center items-center text-center border border-purple-primary ${
                  page?.active === true
                    ? "bg-purple-primary text-white"
                    : "text-black"
                }
            ${isDot ? "cursor-not-allowed" : "cursor-pointer"}`}
                onClick={() => onClickItem(page?.label)}
              >
                {page?.label}
              </div>
            );
          })}
      </div>
      <div
        onClick={() => onClickItem("Next &raquo;")}
        className={`flex-none w-[40px] h-[40px] flex justify-center items-center text-center border border-purple-primary
           
          ${
            meta?.current_page === meta?.last_page
              ? "cursor-not-allowed"
              : "cursor-pointer "
          }`}
      >
        {">"}
      </div>
    </div>
  );
}
