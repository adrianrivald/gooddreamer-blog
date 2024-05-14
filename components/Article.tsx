import Image from "next/image";
import React from "react";
import { articleDummy } from "../constants/articleDummy";
import { eventDummy } from "../constants/eventDummy";

export const Article = () => {
  return (
    <div className="py-8 px-20 mt-14">
      {/* heading */}
      <div className="flex justify-between">
        <h1 className="text-[40px] text-purple-primary font-bold">Artikel</h1>
        <button
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
      <div className="grid grid-cols-4 gap-8 mt-12">
        {articleDummy?.slice(0, 8).map((event) => {
          return (
            <div className="relative flex flex-col gap-2">
              <Image
                src={event?.image}
                width={385}
                height={239}
                alt="event_image"
              />
              <div>
                <h2 className="text-[30px] text-purple-primary font-bold mt-0 line-clamp-2 h-[80px]">
                  {event?.title}
                </h2>
                <p className="text-grey-primary text-[18px] mt-2 lg:w-3/4 line-clamp-5">
                  {event?.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
