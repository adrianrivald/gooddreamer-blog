import Image from "next/image";
import React from "react";
import { useFavoriteAuthorsList } from "../services/favorite-authors/use-favorite-authors-list";

export const Author = () => {
  const { data } = useFavoriteAuthorsList();
  const favoriteAuthorsData = data?.data;

  console.log(favoriteAuthorsData, "fava");
  return (
    <div className="p-20 mt-14 bg-black-primary">
      <h2 className="text-[30px] font-bold text-white text-center lg:w-3/4 mx-auto">
        Jelajahi Dunia Imajinasi Anda Bergabunglah sebagai Penulis Novel dan
        Dapatkan Akses ke Berbagai Benefit yang Menginspirasi!"
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between mt-16 items-center">
        <div className="text-white">
          <h3 className="text-[40px] text-center">
            Penulis Favorit
            <br />
            Gooddreamer, Minggu ini!
          </h3>
          <div className="flex justify-center">
            <div className="relative  mt-12">
              <Image
                src={
                  favoriteAuthorsData && favoriteAuthorsData[0]?.author?.image
                }
                width={214}
                height={214}
                alt="author"
                className="rounded-full object-cover"
              />
              <div className="border-4 border-white rounded-full w-[55px] h-[55px] bg-red-primary flex justify-center items-center absolute top-2 left-0 text-[25px]">
                1
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-center items-center gap-2 text-[18px]">
              <Image
                src="/assets/icons/book.svg"
                width={22}
                height={22}
                alt="book"
              />
              <span>
                {favoriteAuthorsData && favoriteAuthorsData[0]?.author?.readers}{" "}
                Novel dibaca
              </span>
            </div>
            <div className="mt-2 flex justify-center items-center gap-2 text-[18px]">
              <Image
                src="/assets/icons/love.svg"
                width={22}
                height={22}
                alt="book"
              />
              <span>
                {favoriteAuthorsData &&
                  favoriteAuthorsData[0]?.author?.favorites}{" "}
                Difavoritkan
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-white rounded-[10px] p-[20px]">
          {/* list author 2-5 */}
          <div className="flex flex-col gap-4">
            {favoriteAuthorsData &&
              favoriteAuthorsData?.slice(1).map((data: any, index: number) => (
                <div className="flex gap-2 items-center border border-grey-secondary rounded-[10px] p-4">
                  <div className="relative">
                    <Image
                      src={data?.author?.image}
                      width={214}
                      height={214}
                      alt="author"
                      className="rounded-full object-cover w-[60px] h-[60px]"
                    />
                    <div className="border border-white rounded-full w-[24px] h-[24px] bg-red-primary flex justify-center items-center absolute top-0 left-0 text-white text-[14px]">
                      {index + 2}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <Image
                        src="/assets/icons/flame.svg"
                        width={12}
                        height={12}
                        alt="flame"
                      />
                      <h3 className="font-bold text-[20px] text-black-primary">
                        {data?.author?.fullname}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image
                        src="/assets/icons/book-purple.svg"
                        width={12}
                        height={12}
                        alt="book"
                      />
                      <h3 className="text-[18px] text-grey-third">
                        {data?.author?.readers} Novel dibaca
                      </h3>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image
                        src="/assets/icons/love-purple.svg"
                        width={12}
                        height={12}
                        alt="love"
                      />
                      <h3 className="text-[18px] text-grey-third">
                        {data?.author?.favorites} Difavoritkan
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
