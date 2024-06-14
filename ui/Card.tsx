import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface CardProps {
  image: string;
  title: string;
  content: string;
  withDetailButton?: boolean;
  url: string;
}

export const Card = (props: CardProps) => {
  const { image, title, content, withDetailButton = false, url } = props;
  const router = useRouter();

  const onToDetail = () => {
    router.push(url);
  };

  return (
    <div className="relative flex flex-col gap-2">
      <Image
        src={image}
        width={385}
        height={239}
        alt="event_image"
        className="w-full h-[210px] object-fit rounded-t-lg"
      />
      <div className="w-full">
        <h2 className="text-[30px] text-purple-primary font-bold mt-0 line-clamp-2 max-h-[80px]">
          {title}
        </h2>
        <p className="text-grey-primary text-[18px] mt-2 line-clamp-3">
          {content}
        </p>
      </div>
      {withDetailButton && (
        <button
          onClick={onToDetail}
          className={`font-bold mt-4 bg-purple-secondary text-purple-primary flex justify-between items-center gap-2 rounded-[5px] focus:outline-none w-full py-2 px-4 `}
        >
          Lebih Detail
          <Image
            src="/assets/icons/arrow.svg"
            width={12}
            height={12}
            alt="arrow"
          />
        </button>
      )}
    </div>
  );
};
