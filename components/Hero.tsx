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

  const onToWebsite = () => {
    router.push("https://gooddreamer.id");
  };

  const settings = {
    dots: true,
    infinite: banners?.length > 1 ? true : false,
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
    <>
      {banners?.length ? (
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
      ) : (
        <div className="w-full relative bg-gradient-to-r from-[#D3CAE1] to-white min-h-[520px]">
          <div className="absolute top-[16%] left-[5%] text-[20px] lg:text-[50px] text-purple-primary font-bold">
            <div>
              <div className="bg-white py-1 px-2 inline-block">
                <h2>Menembus Batas Imajinasi</h2>
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-white py-1 px-2 inline-block">
                <h2>Jelajahi Dunia-dunia Baru</h2>
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-white py-1 px-2 inline-block">
                <h2>di Website Novel Kami!</h2>
              </div>
            </div>
            <button
              onClick={onToWebsite}
              className="mt-4 lg:mt-0 bg-yellow-primary p-[10px] rounded-[8px] text-purple-primary text-[14px] w-[200px]"
            >
              Jelajahi Sekarang
            </button>
          </div>
        </div>
      )}
    </>
  );
};
