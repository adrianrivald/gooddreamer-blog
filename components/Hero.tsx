import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const LINK = "https://gooddreamer.id";

export const Hero = () => {
  const router = useRouter();

  const onToWebsite = () => {
    window.location.href = LINK;
  };

  return (
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
  );
};
