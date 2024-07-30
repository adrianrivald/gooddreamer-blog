import Image from "next/image";
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
    router.push({
      pathname: `/${uri}`,
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider className="mt-16 overflow-hidden" {...settings}>
      {banners?.slice(0, 6).map((banner: any) => (
        <div
          // onClick={() => onToDetail(banner?.url)}
          className="mt-2 text-base cursor-pointer w-full h-[600px]"
          key={banner?.uri}
        >
          <Image
            src={banner?.image}
            width={1280}
            height={800}
            className="object-cover w-full h-[600px]"
            alt="banner"
          />
        </div>
      ))}
    </Slider>
  );
};
