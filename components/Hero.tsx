import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="w-full relative bg-gradient-to-r from-[#D3CAE1] to-white min-h-[520px]">
      <div className="absolute top-[16%] left-[5%] text-[50px] text-purple-primary font-bold">
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
        <button className="bg-yellow-primary p-[10px] rounded-[8px] text-purple-primary text-[14px] w-[200px]">
          Jelajahi Sekarang
        </button>
      </div>
    </div>
  );
};
