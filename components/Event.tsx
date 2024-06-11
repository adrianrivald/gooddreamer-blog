import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { eventDummy } from "../constants/eventDummy";
import { useContentList } from "../services/content/use-content-list";
import { Button } from "../ui/Button";

export const Event = () => {
  const router = useRouter();
  const { data } = useContentList("activity");
  const activities = data?.data;

  const onToActivity = () => {
    router.push("/activity");
  };

  const onClickActivityItem = (id: number) => {
    router.push({
      pathname: `/activity/${id}`,
    });
  };
  return (
    <div className="py-8 px-20 mt-14">
      {/* heading */}
      <div className="flex justify-between">
        <h1 className="text-[40px] text-purple-primary font-bold">
          Event dan Komunitas GDSquad
        </h1>
        <button
          onClick={onToActivity}
          className={`mt-4 bg-purple-secondary text-purple-primary flex justify-between items-center gap-2 rounded-[5px] focus:outline-none w-[206px] py-2 px-4 `}
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
        {activities?.map((activity: any) => {
          return (
            <div className="relative flex gap-6 mt-4">
              <Image
                src={activity?.image}
                width={385}
                height={239}
                alt="event_image"
                className="w-[385px] h-[239px] object-cover rounded-[10px] flex-none"
              />
              <div>
                <h2 className="text-[30px] text-purple-primary font-bold mt-0">
                  {activity?.title}
                </h2>
                <p className="text-grey-primary text-[18px] mt-2 lg:w-3/4">
                  {activity?.content_preview}
                </p>
                <button
                  onClick={() => onClickActivityItem(activity?.id)}
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
