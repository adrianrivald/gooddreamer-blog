import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Slider from "react-slick";
import { useBannerList } from "../services/banner/use-banner-list";

const LINK = "https://gooddreamer.id";

export const Hero = () => {
  const router = useRouter();
  const { data } = useBannerList();
  const banners = data?.data;
  console.log(data, "data");

  const onToDetail = (uri: string) => {
    router.push(`${uri}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 5000,
    touchMove: false,
    draggable: true,
    swipeToSlide: true,
  };
  console.log(banners, "banners");

  return (
    <Slider className="overflow-hidden" {...settings}>
      {banners &&
        banners?.slice(0, 6).map((banner: any) => (
          <Link
            href={banner?.url}
            target="_blank"
            className="mt-2 text-base cursor-pointer w-full focus:outline-none"
            key={banner?.url}
          >
            <img
              src={banner?.image}
              width={1920}
              height={600}
              className="object-cover w-full max-h-[600px] max-w-[1920px] m-auto"
              alt="banner"
            />
          </Link>
        ))}
    </Slider>
  );
};
