import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export const Navbar = () => {
  const router = useRouter();
  const onClickLogo = () => {
    router.push("/");
  };
  return (
    <div className="max-w-[120rem] h-[60px] mx-auto flex justify-between items-center py-8 px-20 w-full fixed z-50 bg-white">
      <Image
        src="/assets/images/gooddreamer-logo.svg"
        width={200}
        height={27}
        alt="gooddreamer-logo"
        onClick={onClickLogo}
        className="cursor-pointer"
      />
      <ol className="flex gap-12 justify-between text-purple-primary">
        <li className="cursor-pointer">Pengumuman</li>
        <li className="cursor-pointer">Aktivitas</li>
        <li className="cursor-pointer">Penulis</li>
        <li className="cursor-pointer">Artikel</li>
        <li className="cursor-pointer">FAQ</li>
      </ol>
    </div>
  );
};
