import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";

interface PaginationProps {
  meta: any;
  page: number;
  pageName: "article" | "activity" | "announcement" | "promo";
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
    if (isNext && meta?.current_page !== meta?.last_page) {
      if (query?.pageIndex) {
        router.push({
          pathname: `/${pageName}/page/${
            parseInt(query?.pageIndex as string) + 1
          }`,
        });
      } else {
        router.push({
          pathname: `/${pageName}/page/2`,
        });
      }
    }
    if (isPrev && meta?.current_page !== meta?.from) {
      router.push({
        pathname: `/${pageName}/page/${
          parseInt(query?.pageIndex as string) - 1
        }`,
      });
    }
    if (!isPrev && !isNext) {
      router.push({
        pathname: `/${pageName}/page/${parseInt(label).toString()}`,
      });
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
