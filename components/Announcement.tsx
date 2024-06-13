import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  useAnnouncementList,
  usePromoList,
} from "../services/content/use-content-list";

export const Announcement = () => {
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
  return (
    <Slider className="mt-16" {...settings}>
      <div className="py-8 px-20 bg-purple-primary text-white min-h-[370px]">
        <h3 className="text-[40px]">Pengumuman</h3>
        <ul className="list-disc mt-8 ml-4">
          {announcements?.map((announcement) => (
            <li className="mt-2 text-base">{announcement?.title}</li>
          ))}
        </ul>
      </div>
      <div className="py-8 px-20 bg-yellow-primary text-white min-h-[370px]">
        <h3 className="text-[40px]">Promo Section</h3>

        <ul className="list-disc mt-8 ml-4">
          {promos?.map((promo) => (
            <li className="mt-2 text-base">{promo?.title}</li>
          ))}
        </ul>
      </div>
    </Slider>
  );
};
