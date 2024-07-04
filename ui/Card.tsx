import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface CardProps {
  image: string;
  title: string;
  content: string;
  withDetailButton?: boolean;
  url?: string;
  coverHeight?: string;
}

export const Card = (props: CardProps) => {
  const {
    image,
    title,
    content,
    withDetailButton = false,
    url,
    coverHeight = "h-[210px]",
  } = props;
  const router = useRouter();

  const onToDetail = () => {
    if (url) router.push(url);
  };

  if (!content) return null;

  return (
    <div className="relative flex flex-col gap-2">
      <Image
        src={image}
        width={385}
        height={239}
        alt="event_image"
        onClick={onToDetail}
        className={`w-full ${coverHeight} object-cover rounded-t-lg cursor-pointer`}
      />
      <div className="w-full">
        <h2
          onClick={onToDetail}
          className="lg:h-[50px] cursor-pointer text-[24px] lg:text-[30px] text-purple-primary font-bold mt-0 line-clamp-1 max-h-[80px]"
        >
          {title}
        </h2>
        <p className="lg:h-[60px] text-grey-primary text-[18px] mt-2 line-clamp-2">
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
