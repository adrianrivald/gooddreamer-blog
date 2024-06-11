import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { articleDummy } from "../constants/articleDummy";
import { eventDummy } from "../constants/eventDummy";
import { useContentList } from "../services/content/use-content-list";
import { Card } from "../ui/Card";

export const Article = () => {
  const router = useRouter();
  const { data } = useContentList("article");
  const articles = data?.data;
  const onToArticle = () => {
    router.push("/article");
  };
  const onClickArticleItem = (id: number) => {
    router.push({
      pathname: `/article/${id}`,
    });
  };
  return (
    <div className="py-8 px-20 mt-14">
      {/* heading */}
      <div className="flex justify-between">
        <h1 className="text-[40px] text-purple-primary font-bold">Artikel</h1>
        <button
          onClick={onToArticle}
          className={`mt-4 bg-purple-secondary text-purple-primary flex justify-between items-center gap-2 rounded-[5px] focus:outline-none w-[206px] py-2 px-4 `}
        >
          Artikel Lainnya
          <Image
            src="/assets/icons/arrow.svg"
            width={12}
            height={12}
            alt="arrow"
          />
        </button>{" "}
      </div>

      {/* content */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {articles?.slice(0, 8).map((article: any) => {
          return (
            <div
              onClick={() => onClickArticleItem(article?.id)}
              className="relative flex flex-col gap-2 cursor-pointer"
            >
              <div className="relative flex flex-col gap-2">
                <Image
                  src={article?.image}
                  width={385}
                  height={239}
                  alt="event_image"
                  className={`w-full rounded-t-lg h-[188px] object-cover`}
                />
                <div className="w-full">
                  <h2 className="text-[30px] text-purple-primary font-bold mt-0 line-clamp-2 max-h-[80px]">
                    {article?.title}
                  </h2>
                  <p className="text-grey-primary text-[18px] mt-2 line-clamp-3">
                    {article?.content_preview}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
