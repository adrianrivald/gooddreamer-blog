import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  useAnnouncementList,
  usePromoList,
} from "../services/content/use-content-list";
import { useRouter } from "next/router";

export const Announcement = () => {
  const router = useRouter();
  const { data: announcementData } = useAnnouncementList();
  const { data: promoData } = usePromoList();
  const announcements = announcementData?.data;
  const promos = promoData?.data;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.25,
    slidesToScroll: 1,
  };

  const onToDetail = (uri: string, category: string) => {
    router.push({
      pathname: `/${category}/${uri}`,
    });
  };

  return (
    <Slider className="mt-16" {...settings}>
      <div className="py-8 px-20 bg-purple-primary text-white min-h-[370px]">
        <h3 className="text-[40px]">Pengumuman</h3>
        <ul className="list-disc mt-8 ml-4">
          {announcements?.slice(0, 6).map((announcement: any) => (
            <li
              onClick={() => onToDetail(announcement?.uri, "announcement")}
              className="mt-2 text-base cursor-pointer"
            >
              {announcement?.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="py-8 px-20 bg-yellow-primary text-white min-h-[370px]">
        <h3 className="text-[40px]">Promo Section</h3>

        <ul className="list-disc mt-8 ml-4">
          {promos?.slice(0, 6).map((promo: any) => (
            <li
              onClick={() => onToDetail(promo?.uri, "promo")}
              className="mt-2 text-base cursor-pointer"
            >
              {promo?.title}
            </li>
          ))}
        </ul>
      </div>
    </Slider>
  );
};
