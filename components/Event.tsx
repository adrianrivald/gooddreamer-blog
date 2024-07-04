import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { eventDummy } from "../constants/eventDummy";
import { useActivityList } from "../services/content/use-content-list";
import { Button } from "../ui/Button";

export const Event = () => {
  const router = useRouter();
  const { data } = useActivityList();
  const activities = data?.data;

  const onToActivity = () => {
    router.push("/activity");
  };

  const onClickActivityItem = (uri: string) => {
    router.push({
      pathname: `/activity/${uri}`,
    });
  };
  return (
    <div className="py-8 px-8 lg:px-20 mt-14">
      {/* heading */}
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <h1 className="text-[32px] lg:text-[40px] text-purple-primary font-bold">
          Event dan Komunitas GDSquad
        </h1>
        <button
          onClick={onToActivity}
          className={`h-[50px] mt-4 bg-purple-secondary text-purple-primary flex justify-between items-center gap-2 rounded-[5px] focus:outline-none w-[206px] py-2 px-4 `}
        >
          Aktifitas Lainnya
          <Image
            src="/assets/icons/arrow.svg"
            width={12}
            height={12}
            alt="arrow"
          />
        </button>{" "}
      </div>

      {/* content */}
      <div className="flex flex-col gap-8 mt-12">
        {activities?.slice(0, 3).map((activity: any) => {
          return (
            <div className="relative flex flex-col lg:flex-row gap-6 mt-4">
              <Image
                onClick={() => onClickActivityItem(activity?.uri)}
                src={activity?.thumbnail}
                width={385}
                height={239}
                alt="event_image"
                className="cursor-pointer w-full lg:w-[385px] h-[239px] object-cover rounded-[10px] flex-none"
              />
              <div>
                <h2
                  onClick={() => onClickActivityItem(activity?.uri)}
                  className="cursor-pointer text-[24px] lg:text-[30px] text-purple-primary font-bold mt-0"
                >
                  {activity?.title}
                </h2>
                <p className="text-grey-primary text-[18px] mt-2 lg:w-3/4 line-clamp-4">
                  {activity?.content_preview}
                </p>
                <button
                  onClick={() => onClickActivityItem(activity?.uri)}
                  className={` font-bold mt-4 bg-purple-secondary text-purple-primary flex justify-between items-center gap-2 rounded-[5px] focus:outline-none w-[206px] py-2 px-4 `}
                >
                  Lebih Detail
                  <Image
                    src="/assets/icons/arrow.svg"
                    width={12}
                    height={12}
                    alt="arrow"
                  />
                </button>{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
