import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="bg-black-primary py-14 px-8 lg:px-20 mt-14 flex flex-col lg:flex-row gap-12 justify-between text-white">
      <div className="w-3/4">
        <Image
          src="/assets/images/gooddreamer-logo-white.svg"
          width={200}
          height={27}
          alt="gooddreamer-logo"
        />
        <div className="flex mt-4 gap-8">
          <div>
            <h4 className="text-[18px] font-bold">Informasi</h4>
            <ul className="text-[16px] flex flex-col gap-2 mt-4">
              <li>
                <Link href="/announcement">Pengumuman</Link>
              </li>
              <li>
                <Link href="/activity">Aktivitas</Link>
              </li>
              {/* <li><Link href="/author">Benefit Penulis {"&"} Jadi Penulis</Link>Benefit Penulis {"&"} Jadi Penulis</li> */}
              <li>
                <Link href="/article">Artikel</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[18px] font-bold">Ketentuan</h4>
            <ul className="text-[16px] flex flex-col gap-2 mt-4">
              <li>
                <Link href="https://gooddreamer.id/privacy-terms">
                  Syarat {"&"} Ketentuan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-auto">
        <h4 className="text-[18px] font-bold">
          Tidak ingin ketinggalan berita?
        </h4>
        <h5 className="text-[16px] mt-2">
          Kami bisa mengirimkan update melalui email
        </h5>
        <div className="relative mt-4">
          <input
            type="email"
            className="rounded-[8px] py-[12px] pl-12 w-full border border-white bg-black-primary"
            placeholder="Tulis emailmu disini"
          />
          <Image
            src="/assets/icons/envelope.svg"
            width={24}
            height={24}
            alt="envelope"
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
          />
        </div>
        <div className="mt-12">
          <h4 className="text-[18px] font-bold">Hubungi Kami</h4>
          <div className="flex mt-3 gap-3">
            <Link
              target="_blank"
              href="https://www.instagram.com/gooddreamerindonesia"
            >
              <Image
                src="/assets/icons/ig.svg"
                width={21}
                height={21}
                alt="ig"
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.facebook.com/GoodDreamerOfficial"
            >
              <Image
                src="/assets/icons/fb.svg"
                width={21}
                height={21}
                alt="fb"
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/gooddreamer-indonesia/"
            >
              <Image
                src="/assets/icons/linkedin.svg"
                width={21}
                height={21}
                alt="linkedin"
              />
            </Link>
          </div>
          <h5 className="text-[16px] mt-3">Copyright @Gooddreamer</h5>
        </div>
      </div>
    </div>
  );
};
