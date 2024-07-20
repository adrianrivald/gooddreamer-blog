import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export const Navbar = () => {
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const onClickLogo = () => {
    router.push("/");
  };

  const onToggleMenu = () => {
    setToggleMenu((prevState) => !prevState);
  };

  useEffect(() => {
    setToggleMenu(false);
  }, [router]);

  return (
    <div className="max-w-[120rem] h-[60px] mx-auto flex justify-between items-center py-8 px-8 lg:px-20 w-full fixed z-50 bg-white">
      <Image
        src="/blog/assets/images/gooddreamer-logo.svg"
        width={200}
        height={27}
        alt="gooddreamer-logo"
        onClick={onClickLogo}
        className="cursor-pointer"
      />
      <ol className="hidden lg:flex gap-12 justify-between text-purple-primary">
        <li className="cursor-pointer">
          <Link href="/announcement">Pengumuman</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/activity">Aktivitas</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="https://gooddreamer.id/author">Penulis</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/article">Artikel</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/faq">FAQ</Link>
        </li>
      </ol>
      <div
        className="flex lg:hidden flex-col cursor-pointer gap-2"
        onClick={onToggleMenu}
      >
        <div className="bg-purple-primary w-[30px] h-[3px]"></div>
        <div className="bg-purple-primary w-[30px] h-[3px]"></div>
        <div className="bg-purple-primary w-[30px] h-[3px]"></div>
      </div>

      <div
        id="backdrop"
        onClick={() => setToggleMenu(false)}
        className={`transition-all bg-black opacity-50 fixed top-0 left-0 w-full h-screen ${
          toggleMenu ? "block" : "hidden"
        }`}
      ></div>

      <div
        className={`transition-all fixed top-0 ${
          toggleMenu ? "right-0" : "-right-[300px]"
        } w-[300px] h-screen bg-white px-8 py-5`}
      >
        <div className="flex justify-end">
          <div
            className="flex lg:hidden flex-col cursor-pointer gap-0"
            onClick={onToggleMenu}
          >
            <div className="relative px-8 py-5">
              <div className="absolute top-4 bg-purple-primary w-[30px] h-[3px] rotate-[45deg]"></div>
              <div className="absolute top-4 bg-purple-primary w-[30px] h-[3px] rotate-[135deg]"></div>
            </div>
          </div>
        </div>
        <ul className="mt-8 flex flex-col gap-4 text-purple-primary font-bold">
          <li>
            <Link href="/">Beranda</Link>
          </li>
          <li>
            <Link href="/announcement">Pengumuman</Link>
          </li>
          <li>
            <Link href="/activity">Aktivitas</Link>
          </li>
          <li>
            <Link href="https://gooddreamer.id/author">Penulis</Link>
          </li>
          <li>
            <Link href="/article">Artikel</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
      {/* )} */}
    </div>
  );
};
