import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const Navbar = () => {
  const router = useRouter();
  const onClickLogo = () => {
    router.push("/");
  };
  return (
    <div className="max-w-[120rem] h-[60px] mx-auto flex justify-between items-center py-8 px-8 lg:px-20 w-full fixed z-50 bg-white">
      <Image
        src="/assets/images/gooddreamer-logo.svg"
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
          <Link href="/author">Penulis</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/article">Artikel</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/faq">FAQ</Link>
        </li>
      </ol>
    </div>
  );
};
